import React, { Fragment } from 'react'
import { Send } from '@mui/icons-material'
import './Newsletter.scss'

export const Newsletter = () => {

    return (<Fragment>
               <div className='content'>
                    <h1>Newsletter</h1>
                    <div className='details'>Get updates on favorite items</div>
                    <div className='input-content'>
                        <input type={'text'} placeholder={'Enter Email Address'} />
                        <button><Send /></button>
                    </div>
               </div>
            </Fragment>)

}
