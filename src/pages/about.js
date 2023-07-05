import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AboutData from "../content/AboutData.json"
import Button from '../components/Button'

const about = () => {
    const data = AboutData.contents

    return (
        <Layout>
            <div class="flex flex-col lg:flex-row mb-4 mt-16">
                <div class="flex justify-center  mx-auto items-center lg:w-1/2">
                    <StaticImage
                        src="../images/akshat.png"
                        alt="An Image"
                        placeholder="blurred"
                        layout="constrained"
                        // width={180}
                        height={540}
                    />
                </div>

                <div class="mt-10 ml-5 lg:mt-0 lg:w-1/2 lg:pl-16">
                    <div className="text-5xl font-bold">About Akshat</div>
                    <div className="text-sm mt-6 leading-loose font-light">
                        <p>{data.para1}</p>
                        <p className='mt-3'>{data.para2}</p>
                        <p className='mt-3'>His other credentials are:</p>
                        {
                            data.para3.map((item) => {
                                return (
                                    <p>- {item}</p>
                                )
                            })
                        }
                        <div className='mt-8'>
                            <Button value={"VIEW COURSES"} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default about