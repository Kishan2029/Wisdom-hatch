import React from 'react'
import OfferData from "../content/OfferData.json"

const OfferSection = () => {
    const data = OfferData.content
    return (
        <div className='mt-10'>
            <div className='text-lg font-mono'>What We Offer</div>
            <div className='text-4xl mt-2'>Finance Courses that will make you Smart!</div>
        </div>
    )
}

export default OfferSection