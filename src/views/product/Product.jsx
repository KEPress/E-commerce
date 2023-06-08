import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, json } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add, Remove } from '@mui/icons-material'
import { Newsletter } from '../../widgets/newsletter/Newsletter'
import { Footer } from '../../widgets/footer/Footer'
import { cartActions } from '../../redux/slices/cart'
import axios from 'axios'
import './Product.scss'



//NOTE: ProductRoot.jsx a Layout setup for Navigate and Notice component
//In Route setup for App these are child routes to parent route ProductRoot.jsx
export const Product = () => {

    const location = useLocation(), dispatch = useDispatch()

    const productId = location.pathname.split(`/`)[2]

    const [product, setProduct] = useState(Object)

    const [quantity, setQuantity] = useState(1)

    const [color, setColor] = useState(String)

    const [size, setSize] = useState(String)

    useEffect(() => {
        const getProduct = async () => {

            try {
                const response = await axios.get(`/products/${productId}`)
                setProduct(response.data)
            } catch (error) {
                throw json({ message: error }, { status: 500 })
            }
        }
        getProduct()
    }, [productId])

    const quantityHandle = (type) => {
        if (type === 'minus') quantity > 1 && (setQuantity(quantity - 1))
        else setQuantity(quantity + 1)
    }

    const submitHandle = () => {
        dispatch(cartActions.addProduct({...product, quantity, color, size}))
    }

    
    return (<Fragment>
                <Helmet>
                    <title>Product | E-Shop</title>
                </Helmet>
               
                    <div className='product-wrapper'>
                        <div className='display'>
                            <img src={ product.image } alt={'details'} />
                        </div>
                        <div className='details'>
                            <h1>{ product.title }</h1>
                            <p>{ product.details }</p>
                            <span>${ product.price }</span>
                            <div className='filter-content'>
                                <div className='filter'>
                                    <span>Color</span>
                                    { product.color?.map((color) => (
                                        <div className='filter-color' style={{'--color':color }} key={color} onClick={() => setColor(color)} />
                                      
                                    ))}
                                    {   console.log(color) }
                                </div>
                                <span className='size'>Size</span>
                                <select onChange={(event) => setSize(event.target.value)}> 
                                    <option>-----</option>
                                    { product.size?.map((size) => (
                                         <option key={size}>{ size }</option>
                                    ))}
                                    { console.log(size) }
                                </select>
                            </div>
                            <div className='add-content'>
                                <div className='amount-data'>
                                    <Remove onClick={() => quantityHandle('minus')} />
                                    <span className='amount'>{ quantity }</span>
                                    <Add onClick={() => quantityHandle('plus')} />
                                </div>
                                <button onClick={submitHandle}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                <Newsletter />
                <Footer />
           </Fragment>)
}
