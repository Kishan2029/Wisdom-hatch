import React from 'react'
import Button from './Button'
import { StaticImage } from "gatsby-plugin-image"


const HeaderSection = () => {
    return (
        <div className='mt-10 flex flex-col justify-between items-center lg:flex-row'>
            <div className='lg:w-2/5'>
                <div className='text-2xl'>Wisdom Hatch</div>
                <div className='text-4xl leading-normal mt-4'>Being Knowledgeable is<br /> the new Cool!</div>
                <div className='text-base leading-8 mt-5'>Learn about Finance, Management Consulting and develop career transforming skills.</div>
                <div className='mt-8'>
                    <Button value={"VIEW COURSES"} />
                </div>
            </div>
            <div className='mt-0 justify-self-end '>

                <StaticImage
                    src="../images/sideSection.png"
                    alt="Side Section"
                    placeholder="blurred"
                    layout="constrained"
                // width={180}
                // height={700}
                />
            </div>
        </div>
    )
}

export default HeaderSection