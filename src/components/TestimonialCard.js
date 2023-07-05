import React from 'react'
import GreenContainer from './GreenContainer'
import { FaStarHalf, FaStar } from 'react-icons/fa';
import Star from './Star';

const TestimonialCard = ({ description, name, title, star, id }) => {
    return (
        <div className={` ${id == 1 ? 'hidden' : ""} lg:block`}>
            <GreenContainer width={"fitcontent"}>
                <div className='p-7'>
                    <div className='text-sm leading-loose'>
                        {description}
                    </div>
                    <div className='mt-3 mb-3' >
                        <Star star={star} />

                    </div>
                    <div className="text-lg ">{name}</div>
                    <div className="text-sm mt-1.5">{title}</div>
                </div>
            </GreenContainer>
        </div>
    )
}

export default TestimonialCard