import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Notice } from '../../widgets/notice/Notice'
import { Slider } from '../../widgets/slider/Slider'
import { Categories } from '../../widgets/categories/Categories'
import { Products } from '../../widgets/products/Products'
import { Newsletter } from '../../widgets/newsletter/Newsletter'
import { Footer } from '../../widgets/footer/Footer'

//Navigate widget is part of the Layout.jsx which is a parent route to child Home.jsx
export const Home = () => {

    return (<Fragment>  
                <Helmet>
                    <title>Home | E-Shop</title>
                </Helmet>
                <Notice />
                <Slider />
                <Categories />
                <Products />
                <Newsletter />
                <Footer />
            </Fragment>)

}
