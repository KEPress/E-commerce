import React, { Fragment } from 'react'
import { categories } from '../../dummy'
import { Category } from '../category/Category'
import './Categories.scss'

export const Categories = () => {

    return (<Fragment>
                <div className='categories'>
                    { categories.map((category) => (
                        <Category key={category.id} item={category} />
                    ))}
                </div>
            </Fragment>)

}
