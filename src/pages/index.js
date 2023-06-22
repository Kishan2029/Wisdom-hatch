import React from 'react'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import OfferSection from '../components/OfferSection'
import MidSection from '../components/MidSection'
import TestimonialSection from '../components/TestimonialSection'

import "../styles/global.css"




const index = () => {
  return (
    <div className='overflow-scroll'>
      <div className="mx-36 ">
        <Navbar />
        <HeaderSection />
        <OfferSection />
        <MidSection />
        <TestimonialSection />
        <div className='mt-20'>
          Footer
        </div>
      </div>
    </div>
  )
}

export default index