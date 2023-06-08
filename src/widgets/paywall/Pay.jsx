import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import './Pay.scss'

const key = `pk_test_51MZ1XmHdGh7jLkvIDB0tmQdkUbGiqDay2lrrV10SUUm0gWQoxvsCe7tiWD9QOxRGzOe6u4qAG4ehJneOPvy0PvmB000ll7y4ya`


export const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)

    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const payRequest = async () => {
            try {
              const response = await axios.post(`/checkout/payment`, {
                    tokenId: stripeToken.id,
                    amount: 2000
              })
              console.log(response.data)
              navigate(`/success`)
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && (payRequest())
    }, [stripeToken, navigate])

    
    return (<Fragment>
                <div className='paywall'>
                { stripeToken ? (<span>Processing</span>):
                    (<StripeCheckout name={'E-Shop'} image={`https://www.researchgate.net/publication/257462797/figure/fig5/AS:660567807254531@1534503046664/A-Smurf-wearing-a-Phrygian-cap-The-Smurfs-are-cartoon-creations-of-Pierre-Peyo.png`}
                        billingAddress shippingAddress description={'Your Total amount $20'} amount={2000} token={onToken} stripeKey={key}>
                        <button>Payment</button>
                    </StripeCheckout>)}
                </div>
            </Fragment>)

}
