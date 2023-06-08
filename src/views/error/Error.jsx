import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate } from '../../widgets/navigate/Navigate'

export const Error = () => {

  return (<Fragment>
           <Helmet>
                <title>Error | E-Shop</title>
           </Helmet>
           <Navigate />
            <main>
                <h1>An Error occured</h1>
                <p>Could not find this page</p>
            </main>
        </Fragment>)

}
