import React from 'react'
import MainCarosoul from '../../components/HomeCarosoul/MainCarosoul'
import HomeSectionCarosoul from '../../components/HomeSectionCarosoul/SectionCarosoul/HomeSectionCarosoul'

const HomePage = () => {
  return (
    <div>
        <MainCarosoul/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosoul/>
            <HomeSectionCarosoul/>
            <HomeSectionCarosoul/>
            <HomeSectionCarosoul/>
            <HomeSectionCarosoul/>
            <HomeSectionCarosoul/>
        </div>


    </div>
  )
}

export default HomePage