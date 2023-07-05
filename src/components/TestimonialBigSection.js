import React from 'react'
import TestimonialBigData from "../content/TestimonialBigData.json"
import GreenContainer from '../components/GreenContainer'
import Star from '../components/Star'


const bigData = TestimonialBigData.content
const TestimonialBigSection = () => {
    return (

        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 mt-20">
            {
                bigData.map((item) => {
                    return (
                        <GreenContainer shadow={false}>
                            <div className='p-10'>
                                <div className='flex justify-between content-end'>
                                    <div className='self-center'><Star star={item.star} /></div>
                                    <div>{item.name}</div>
                                </div>
                                <div className="mt-6 font-thin leading-relaxed"><p>{item.description}</p></div>
                            </div>
                        </GreenContainer>
                    )

                })
            }
        </div>
    )
}

export default TestimonialBigSection