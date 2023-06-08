import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './Product.scss'

export const Product = ({ item }) => {

    return (<Fragment>
                <div className='product'>
                    <div className='encircle'>
                    </div>
                     <img src={item.image} alt={'product'} /> 
                     <div className='product-info'>
                        <div className='icon'><ShoppingCartOutlined /></div>
                        <div className='icon'><Link to={`/product/${item._id}`}><SearchOutlined /></Link></div>
                        <div className='icon'> <FavoriteBorderOutlined /></div>
                     </div>
                </div>
           </Fragment>)

}
