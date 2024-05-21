import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCart from '../../HomeSectionCart/HomeSectionCart';
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
      </div>

    </div>
  )
}

export default HomeSectionCarosoul