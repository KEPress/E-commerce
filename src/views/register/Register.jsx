import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { SignUp } from '../../widgets/forms/SignUp'
import './Register.scss'


export const Register = () => {
  
    return (<Fragment>
                <Helmet>
                    <title>Register | E-Shop</title>
                </Helmet>
                <div className='register'>
                   <div className='register-wrapper'>
                        <h1>Create a New Account</h1>
                        <SignUp method={'POST'} />
                   </div>
                </div>
            </Fragment>)

}
