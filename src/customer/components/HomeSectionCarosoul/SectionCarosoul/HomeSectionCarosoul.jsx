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
    <div className=' border'>
      <div className='relative p-5'>
        <AliceCarousel
          animationDuration={1000}
          infinite
          disableButtonsControls
          items={items}
          responsive={responsive}
          disableDotsControls
        />
        <Button variant="contained" className='z-50 bg-white' sx={{
          position: 'absolute', top: "8rem", right: "0rem",
          transform: "translatex(-50%) rotate(90deg)",
          bgcolor: "white"
        }} aria-label='next'>
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>

        <Button variant="contained" className='z-50 bg-white' sx={{ position: 'absolute', top: "8rem", Left: "0rem", transform: "translatex(-50%) rotate(90deg)", bgcolor: "white" }} aria-label='next'>
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
      </div>

    </div>
  )
}

export default HomeSectionCarosoul