import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Badge } from '@mui/material'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import './Navigate.scss'

export const Navigate = () => {

    const quantity = useSelector((state) => state.cart.quantity)
  
    return (<Fragment>
                <div className='container'>
                   <div className='wrapper'>
                        <div className='left'>
                            <span className='language'>EN</span>
                            <div className='search'>
                                <input type={'text'} placeholder={'Search'} />
                                <Search style={{ color: 'gray', fontSize: 16}}/>
                            </div>
                        </div>
                        <div className='center'>
                            <h1><Link to={`/`} className='title'>E-SHOP</Link></h1>
                        </div>
                        <div className='right'>
                            <div className='menu-item'><Link to={`/register`}>REGISTER</Link></div>
                            <div className='menu-item'><Link to={`/login`}>LOGIN</Link></div>
                            <div className='menu-item'>
                            <Link to={`/cart`}>
                                <Badge badgeContent={ quantity } color={'primary'}>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </Link>
                            </div>
                        </div>
                   </div>
                </div>
           </Fragment>)

}
