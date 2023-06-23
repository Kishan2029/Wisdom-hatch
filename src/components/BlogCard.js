import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { trimString } from '../util/stringFunction'

const BlogCard = ({ img, title, description }) => {
    return (
        <div>
            <div className='rounded-2xl'>
                <GatsbyImage image={img.childImageSharp.gatsbyImageData} style={{ borderRadius: "1.5rem", height: "15rem" }} alt="blog image" objectFit />
            </div>
            <div className='mt-5 mr-4 text-left'>
                <div className='text-lg font-black'>{title}</div>
                <div className='text-sm mt-2 leading-loose' >{trimString(description, 120)}</div>
                <div className='flex mt-3 items-center'>
                    <div className="text-base font-bold"> Read More</div>
                    <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    )
}

export default BlogCard