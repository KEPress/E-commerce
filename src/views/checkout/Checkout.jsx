import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Pay } from '../../widgets/paywall/Pay'

export const Checkout = () => {

  return (<Fragment>
             <Helmet>
                <title>Checkout | E-Shop</title>
             </Helmet>
             <Pay />
        </Fragment>)

}
