import React from 'react'

import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineArrowRight } from 'react-icons/ai';
const OfferCard = ({ img, title, description }) => {
    return (
        <div className='border-solid border-2 border-[#F2F2F2] rounded-3xl p-6 bg-[#F2F2F2] w-1/3'>
            <StaticImage
                src={"../images/logo.png"}
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={180}
                height={70}
            />
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