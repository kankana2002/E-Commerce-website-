import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCart from '../../HomeSectionCart/HomeSectionCart';
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Mens_Kurta } from '../../../../data/Mens_Kurta';
const HomeSectionCarosoul = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);


  const syncActiveIndex = ({ item }) => setActiveIndex(item)



  const items = Mens_Kurta.slice(0,10).map((item) => <HomeSectionCart product={item} />);



  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          animationDuration={1000}
          infinite
          disableButtonsControls
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-5 && <Button
          variant="contained" 
          className='z-50 bg-white'  
          onClick={slideNext} 
          sx={{
            
          position: 'absolute', 
          top: "8rem", 
          right: "0rem",
            
          transform: "translatex(-50%) rotate(90deg)",
          bgcolor: "white"
          }} 
          aria-label='next'>
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>}

        <Button  onClick={slidePrev} 
        variant="contained" 
        className='z-50 bg-white' 
        sx={{ position: 'absolute', 
        top: "8rem", Left: "0rem", 
        transform: "translatex(-50%) rotate(90deg)", 
        bgcolor: "white" }} 
        aria-label='next'>
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
      </div>

    </div>
  )
}

export default HomeSectionCarosoul