import React from 'react'
import YoutubeEmbed from '../components/YouTubeVideo'
import GreenContainer from '../components/GreenContainer'
import TestimonialVideoData from "../content/TestimonialVideoData.json"
import Star from '../components/Star'

const TestimonialVideoSection = () => {
    const data = TestimonialVideoData.content
    return (

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
    )
}

export default TestimonialVideoSection