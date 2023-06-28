import React from 'react'
import Layout from '../components/Layout'
import GreenContainer from '../components/GreenContainer'
import TestimonialVideoData from "../content/TestimonialVideoData.json"
import TestimonialBigData from "../content/TestimonialBigData.json"
import { FaStarHalf, FaStar } from 'react-icons/fa';
import Star from '../components/Star'
import YoutubeEmbed from '../components/YouTubeVideo'

const testimonial = () => {
    const data = TestimonialVideoData.content
    const bigData = TestimonialBigData.content
    return (
        <Layout>
            <div className='mt-16 flex justify-center'>
                <GreenContainer border={true}>
                    <div className='text-center px-8 py-12'>
                        <div className='text-5xl font-black tracking-wide'> Testimonials</div>
                        <div className="text-sm mt-8">Here are the testimonials from the students who have completed the courses.</div>
                    </div>
                </GreenContainer>
            </div>
            {/* Video Section */}
            <div class="grid grid-cols-2 grid-flow-row gap-5 mt-14">
                {
                    data.map((item) => {
                        return (
                            <GreenContainer shadow={false}>
                                <div className='p-10'>
                                    <div className='flex justify-between'>
                                        <div className='self-center'><Star star={item.star} /></div>
                                        <div>{item.name}</div>
                                    </div>
                                    <div className='h-56 w-full mt-4 border-2 border-black border-solid rounded-xl'>
                                        <YoutubeEmbed embedId={item.embedId} />
                                    </div>
                                </div>
                            </GreenContainer>
                        )

                    })
                }
            </div>

            {/* Testimonial Section */}
            <div class="grid grid-cols-2 grid-flow-row gap-5 mt-20">
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
        </Layout>
    )
}

export default testimonial