import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Notice } from '../../widgets/notice/Notice'

export const ProductRoot = () => {
  
    return (<Fragment>
                <Notice />
                <Outlet />
            </Fragment>)

}
