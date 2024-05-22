import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCart from '../../HomeSectionCart/HomeSectionCart';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { Mens_Kurta } from '../../../../data/Mens_Kurta';
const HomeSectionCarosoul = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1)


  const syncActiveIndex = ({ item }) => setActiveIndex(item)



  const items = Mens_Kurta.slice(0, 8).map((item) => <HomeSectionCart product={item} />);



  return (
    <div className="border">
      <div className="relative p-5">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
    />




        
      </div>

    </div>
  )
}

export default HomeSectionCarosoul