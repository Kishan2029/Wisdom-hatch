import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AboutData from "../content/AboutData.json"
import Button from '../components/Button'

const about = () => {
    const data = AboutData.contents

    return (
        <Layout>
            <div class="flex mb-4 mt-16">
                <div class="w-1/2 ">
                    <StaticImage
                        src="../images/akshat.png"
                        alt="An Image"
                        placeholder="blurred"
                        layout="fixed"
                        // width={180}
                        height={540}
                    />
                </div>
                <div class="w-1/2 pl-16">
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