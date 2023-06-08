import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import './Success.scss'

export const Success = () => {

    const location = useLocation(), navigate = useNavigate()

    const submitHandle = () => {
        navigate(`/`)
    }

    console.log(location)
  
    return (<Fragment>
              <Helmet>
                <title>Checkout Success | E-Shop </title>
              </Helmet>
                <div className='success'>
                    <button onClick={submitHandle}>Go to Homepage</button>
                </div>
            </Fragment>)

}

