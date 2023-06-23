import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const BlogCard = ({ img, title, description }) => {
    return (
        <div>
            <div>
                <StaticImage
                    src="../images/blog1.png"
                    alt="A Blog"
                    placeholder="blurred"
                    layout="fixed"
                    width={180}
                    height={70}
                />
            </div>
            <div>
                <div className='text-xl font-bold'>{title}</div>
                <div className='text-sm'>{description}</div>
            </div>
        </div>
    )
}

export default BlogCard