import React from 'react';
import { mainCarosoulData } from './MainCarosoulData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


    

const MainCarosoul = () => {
  const items = mainCarosoulData.map((item)=> 
    <img style={{
      width : "100%",
      height : "Auto",
    }} className='cursor-pointer' role='presentation' src={item.image} alt=''/>)
  return(
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
};

export default MainCarosoul;