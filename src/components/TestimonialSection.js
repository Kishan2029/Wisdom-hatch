import React from 'react'
import Button from './Button'
import GreenContainer from './GreenContainer'
import TestimonialData from '../content/TestimonialData.json'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
    const data = TestimonialData.content
    return (
        <div className='flex mt-28 space-x-10 items-center'>
            <div className='w-2/5'>
                <div className='text-lg'>Testimonial</div>
                <div className='text-5xl font-bold mt-4 mb-4'>What my students say about the courses</div>
                <Button value={"READ MORE"} />
            </div>
            <div className='flex space-x-7 w-3/5'>
                {
                    data.map((item) => {
                        return (
                            <TestimonialCard description={item.description} name={item.name} title={item.title} star={item.star} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialSection