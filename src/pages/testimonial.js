import React from 'react'
import Layout from '../components/Layout'
import GreenContainer from '../components/GreenContainer'
import TestimonialVideoSection from '../components/TestimonialVideoSection'
import TestimonialBigSection from '../components/TestimonialBigSection'

const testimonial = () => {

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
            <TestimonialVideoSection />
            <TestimonialBigSection />

        </Layout>
    )
}

export default testimonial