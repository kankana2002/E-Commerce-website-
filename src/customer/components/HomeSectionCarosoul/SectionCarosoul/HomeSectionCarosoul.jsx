import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCart from '../../HomeSectionCart/HomeSectionCart';
import { Button } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const HomeSectionCarosoul = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCart />)



  return (
    <div className='relative px-4 lg:px-8'>
      <div className='relative p-5'>
        <AliceCarousel
          animationDuration={1000}
          infinite
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
        <Button variant="contained" className='z-50' sx={{position:'absolute', top:"8rem", right: "0rem", transform: "translatex(50%) rotate(90deg)"}}  aria-label='next'>
        <KeyboardDoubleArrowRightIcon/>
        </Button>
      </div>

    </div>
  )
}

export default HomeSectionCarosoul