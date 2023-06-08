import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './views/home/Home'
import { Error } from './views/error/Error'
import { Layout } from './views/layouts/Layout'
import { ProductRoot } from './views/layouts/ProductRoot'
import { List } from './views/list/List'
import { Product } from './views/product/Product'
import { Register } from './views/register/Register'
import { Login } from './views/login/Login'
import { Cart } from './views/cart/Cart'
import { Checkout } from './views/checkout/Checkout'
import { Success } from './views/checkout/Success'


export const App = () => {

  const router = createBrowserRouter([
    {
      path: `/`, element: <Layout />, errorElement: <Error />, id: 'root', children: [
          { index: true, element: <Home />  },
          { path: `products`, element: <ProductRoot />, children: [
            { index: true, element: <List /> },
            { path: `:category`, children: [
                  { index: true, element: <List /> }
              ]}
          ]},
          { path: `product/:productId`, element: <ProductRoot />, children: [
                { index: true, element: <Product /> }
          ]},
          { path: `register`, element: <Register />},
          { path: `login`, element: <Login />},
          { path: `cart`, element: <Cart />},
          { path: `checkout`, element: <Checkout /> },
          { path: `success`, element: <Success /> }
          
      ]
    }
  ])

  return (<React.Fragment><RouterProvider router={router}/></React.Fragment>)

}
