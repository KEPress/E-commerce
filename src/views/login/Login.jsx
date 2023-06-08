import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { SignIn } from '../../widgets/forms/SignIn'
import './Login.scss'


export const Login = () => {

  return (<Fragment>
              <Helmet>
                <title>Login | E-Shop</title>
              </Helmet>
              <div className='login'>
                <div className='login-wrapper'>
                  <h1>Login</h1>
                  <SignIn method={'POST'} />
                </div>
              </div>
         </Fragment>)

}
