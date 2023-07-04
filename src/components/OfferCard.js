import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineArrowRight } from 'react-icons/ai';
const OfferCard = ({ img, title, description }) => {
    return (
        <div className='border-solid border-2 border-[#F2F2F2] rounded-3xl p-6 bg-[#F2F2F2] md:w-2/5 lg:w-1/3  md:mt-5 md:mr-5 lg:mt-0 lg:mr-0'>
            <GatsbyImage image={img.childImageSharp.gatsbyImageData} style={{ height: "6rem", width: "6rem" }} alt="blog image" objectFit />
            <div className="text-xl mt-4">{title}</div>
            <div className="text-sm leading-relaxed mt-4">{description}</div>
            <div className='flex items-center mt-3'>
                <div className='mr-1'>Buy Now</div>
                <AiOutlineArrowRight />
            </div>

        </div>
    )
}

export default OfferCard