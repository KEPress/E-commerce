import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

//NOTE: It is a common practice in React to define the props of a component as an object type, 
// using destructuring assignment within the function parameters. 
//This allows you to easily access and use the specific props needed within the component.
export const Category = ({ item }) => {

    return (<Fragment>
                <div className='category'>
                    <Link to={`products/${item.category}`}>
                        <img src={item.image} alt={'category'} className='photo' />
                        <div className='info'>
                            <h1>{ item.title }</h1>
                            <button>SHOP NOW</button>
                        </div>
                    </Link>
                </div>
           </Fragment>)

}
