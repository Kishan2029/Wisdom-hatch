import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'


const about = () => {
    return (
        <Layout>

            <div class="flex mb-4 mt-20">
                <div class="w-1/2 ">
                    <StaticImage
                        src="../images/akshat.png"
                        alt="An Image"
                        placeholder="blurred"
                        layout="fixed"
                        // width={180}
                        height={500}
                    />
                </div>
                <div class="w-1/2 "></div>
            </div>

        </Layout>

    )
}

export default about