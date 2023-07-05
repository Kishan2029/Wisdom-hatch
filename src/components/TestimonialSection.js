import React from 'react'
import Button from './Button'
import GreenContainer from './GreenContainer'
import TestimonialData from '../content/TestimonialData.json'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
    const data = TestimonialData.content
    return (
        <div className='flex flex-col md:flex-row mt-28 lg:space-x-10 items-center'>
            <div className='w-full md:w-2/5'>
                <div className='text-lg'>Testimonial</div>
                <div className='text-5xl font-bold mt-4 mb-4'>What my students say about the courses</div>
                <Button value={"READ MORE"} height={14} />
            </div>
            <div className='flex space-x-0 lg:space-x-7 w-full mt-10 md:w-3/5 md:mt-0'>
                {
                    data.map((item) => {
                        return (
                            <TestimonialCard description={item.description} name={item.name} title={item.title} star={item.star} id={item.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialSection