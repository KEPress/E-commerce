import React, { Fragment } from 'react'
import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@mui/icons-material'
import './Footer.scss'

export const Footer = () => {

  return (<Fragment>
            <div className='footer'>
                <div className='left'>
                    <h1>Logo</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.</p>
                    <div className='social-icons'>
                        <div className='social-icons-item'>
                            <Facebook />
                        </div>
                        <div className='social-icons-item'>
                            <Instagram />
                        </div>
                        <div className='social-icons-item'>
                            <Twitter />
                        </div>
                        <div className='social-icons-item'>
                            <Pinterest />
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>My Account</li>
                        <li>Order Tracking</li>
                        <li>Wishlist</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className='right'>
                    <h3>Contact</h3>
                    <div className='contact'>
                        <Room style={{ marginRight: '10px' }} /> Trincity, Tacarigua
                    </div>
                    <div className='contact'>
                        <Phone style={{ marginRight: '10px' }} /> +1 868 237 4996
                    </div>
                    <div className='contact'>
                        <MailOutline style={{ marginRight: '10px' }} /> kepressltd@gmail.com
                    </div>
                    <img src={`https://i.ibb.co/Qfvn4z6/payment.png`} alt={'payment'} />
                </div>
            </div>
        </Fragment>)

}
