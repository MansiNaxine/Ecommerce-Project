import React from 'react'
import {mainCarouselData} from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel=()=>{

    const items= mainCarouselData.map((item)=> <img className='cursor-pointer' src={item.image} alt="" 
                 role='presentation'/>)

    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
        
    )
}
export default MainCarousel;
