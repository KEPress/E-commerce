import React, { Fragment, useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { dummySlide } from '../../dummy'
import './Slider.scss'

export const Slider = ({ slideIndex }) => {

    const [slide, setSlide] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') setSlide(slide > 0 ? (slide - 1) : (2))
        else setSlide(slide < 2 ? (slide + 1) : (0)) 
    }
  
    return (<Fragment>
                <div className='slider'>
                    <div className='slider-arrow-left' onClick={() => handleClick('left')}>
                        <ArrowLeftOutlined />
                    </div>
                   
                    <div className='wrapper' style={{ '--slideIndex':slide }} >
                        { dummySlide.map((item) => (
                            <div className='slide' style={{ '--slideBackground': item.backdrop }} key={item.id}>
                                <div className='image-content'>
                                    <img src={item.image} className='slide-display' alt={'featured'} />
                                </div>
                                <div className='info-content'>
                                    <h1>{ item.title }</h1>
                                    <p>{ item.details }</p>
                                    <button>CLICK HERE</button> 
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='slider-arrow-right' onClick={() => handleClick('right')}>                    
                        <ArrowRightOutlined />
                    </div>

                </div>
           </Fragment>)

}
