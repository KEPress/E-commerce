import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { Products } from '../../widgets/products/Products'
import { Newsletter } from '../../widgets/newsletter/Newsletter'
import { Footer } from '../../widgets/footer/Footer'
import './List.scss'


//NOTE: ProductRoot.jsx a Layout setup for Navigate and Notice component
//In Route setup for App these are child routes to parent route ProductRoot.jsx
export const List = () => {

    const location = useLocation()

    const category = location.pathname.split(`/`)[2]

    const [filters, setFilters] = useState(Object)

    const [sort, setSort] = useState('newest')

    const filterHandle = (event) => {
        const value = event.target.value
        setFilters({ ...filters, [event.target.name]: value })
    }

    return (<Fragment>
                <Helmet>
                    <title>Products | E-Shop</title>
                </Helmet>
                <h1 className='product-header'>{ category }</h1>
                <div className='listing'>
                    <div className='filter'>
                        <span>Filter Products</span>
                        <select name={'color'} onChange={filterHandle}>
                            <option disabled>Color</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                            <option>Lightgreen</option>
                            <option>Grey</option>
                            <option>Lightgrey</option>
                            <option>Darkgrey</option>
                        </select>
                        <select name={'size'} onChange={filterHandle}>
                            <option disabled>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div className='filter'>
                        <span>Sort Products</span>
                        <select onChange={(event) => setSort(event.target.value)}>
                            <option value={'newest'}>Newest</option>
                            <option value={'high'}>Price (high)</option>
                            <option value={'low'}>Price (low)</option>
                        </select>
                    </div>
                </div>
                <Products category={category} filters={filters} sort={sort}  />
                <Newsletter />
                <Footer />
           </Fragment>)

}

