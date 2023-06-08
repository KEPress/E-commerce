import React, { Fragment, useState, useEffect } from 'react'
import { json } from 'react-router-dom'
import { Product } from '../product/Product'
import axios from 'axios'
import './Products.scss'

export const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState(Array)

    const [filterProducts, setFilterProducts] = useState(Array)

    //Fetch Product via Category else Fetch All Products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(category ? (`/products?category=${category}`):(`/products`))
                setProducts(response.data)
            } catch (error) {
                throw json({ message: error}, { status: 500 })
            }
        }
        getProducts()
    }, [category])

    //Filter Products by Color & Size
    useEffect(() => {
        category && (setFilterProducts(products.filter((product) => 
            Object.entries(filters).every(([key, value]) => product[key].includes(value)) )))
    }, [products, category, filters])

   //Sort by Newest, Most Expensive or C
    useEffect(() => {
        if (sort === 'newest') setFilterProducts((previous) => [...previous].sort((a, b) => a.createdAt - b.createdAt))
        else if (sort === 'high') setFilterProducts((previous) => [...previous].sort((a, b) => a.price - b.price))
        else setFilterProducts((previous) => [...previous].sort((a, b) => b.price - a.price))
    }, [sort])

    return (<Fragment>
                <div className='products'>
                    { category ? (filterProducts.map((product) => (<Product key={product.id} item={product} />)))
                        : (products.slice(0, 8).map((product) => (<Product key={product.id} item={product} />))) }
                </div>
           </Fragment>)
 
}
