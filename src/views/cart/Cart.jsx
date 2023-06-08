import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Add, Remove } from '@mui/icons-material'
import { Notice } from '../../widgets/notice/Notice'
import { Footer } from '../../widgets/footer/Footer'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import './Cart.scss'

const STRIPE_KEY = process.env.REACT_APP_STRIPE

export const Cart = () => {

    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart)

    const [fill, setFill] = useState(false)

    const [token, setToken] = useState(null)

    const tokenHandle = (token) => {
        setToken(token)
    }

    useEffect(() => {
        const payRequest = async () => {

            try {
                const response = await axios.post(`/checkout/payment`, {
                    tokenId: token.id,
                    amount: cart.total * 100
                })
                navigate(`/success`, { state: response.data })
            } catch (error) {
                throw new Error(JSON.stringify({ message: error}))
            }
        }
        token && (payRequest())
    }, [token, cart.total, navigate])

    return (<Fragment>
                <Helmet>
                    <title>Cart | E-Shop</title>
                </Helmet>
                <Notice />
                <div className='cart'>
                    <div className='cart-wrapper'>
                        <h1>Your Cart</h1>
                        <div className='top'>
                            <button>CONTINUE SHOPPING</button>
                            <div className='top-texts'>
                                <span>Shopping Bag (2) </span>
                                <span> Your Wishlist (0) </span>
                            </div>
                            <button className={fill ? ('filled'):('')} onClick={() => setFill(true)}>
                                CHECKOUT
                            </button>
                        </div>
                        <div className='bottom'>
                            <div className='info'>
                              { cart.products.map((product) => (
                                <div className='product'>
                                    <div className='product-detail'>
                                        <img src={ product.image } alt={'product'} />
                                        <div className='details'>
                                            <span><b>Product:</b> { product.title } </span>
                                            <span><b>ID:</b> { product._id} </span>
                                            <div className='color'  style={{ '--color':product.color }}/>
                                            <span><b>Size:</b> { product.size} </span>
                                        </div>
                                    </div>
                                    <div className='price-detail'>
                                        <div className='quantity'>
                                            <Add />
                                            <div className='amount'>{ product.quantity }</div>
                                            <Remove />
                                        </div>
                                        <div className='price'>{ product.price * product.quantity }</div>
                                    </div>
                                </div>  ))}
                                <hr />
                            </div>
                            <div className='summary'>
                                <h1>ORDER SUMMARY</h1>
                                <div className='summary-item'>
                                    <span>Subtotal</span>
                                    <span>${ cart.total }</span>
                                </div>
                                <div className='summary-item'>
                                    <span>Estimated Shipping</span>
                                    <span>$5.90</span>
                                </div>
                                <div className='summary-item'>
                                    <span>Shipping Discount</span>
                                    <span>$-5.90</span>
                                </div>
                                <div className='summary-item' type={'total'}>
                                    <span>Total</span>
                                    <span>${ cart.total }</span>
                                </div>
                                <StripeCheckout name={'E-Shop'} image={`https://www.researchgate.net/publication/257462797/figure/fig5/AS:660567807254531@1534503046664/A-Smurf-wearing-a-Phrygian-cap-The-Smurfs-are-cartoon-creations-of-Pierre-Peyo.png`}
                                 billingAddress shippingAddress description={`Your Total amount is $${cart.total}`} amount={cart.total*100} token={tokenHandle} stripeKey={STRIPE_KEY}>
                                    <button>CHECKOUT NOW</button>
                                </StripeCheckout>
                            </div>
                        </div>
                   </div>
                </div>
                <Footer />
           </Fragment>)

}
