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
        autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
  )
};

export default MainCarosoul;