import React from 'react'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import OfferSection from '../components/OfferSection'



const index = () => {
  return (
    <div className='overflow-scroll'>
      <div className="mx-36 ">
        <Navbar />
        <HeaderSection />
        <OfferSection />
      </div>
    </div>
  )
}

export default index