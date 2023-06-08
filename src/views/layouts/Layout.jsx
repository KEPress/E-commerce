import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from '../../widgets/navigate/Navigate'

export const Layout = () => {

  return (<Fragment>
           <Navigate />
           <Outlet />
        </Fragment>)

}
