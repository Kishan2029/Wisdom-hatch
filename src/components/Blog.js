import React from 'react'
import BlogCard from './BlogCard'
import BlogData from '../content/BlogData.json'
import { graphql, useStaticQuery } from 'gatsby'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
      contentJson(title: {eq: "Blog Data"}) {
        content {
          description
          title
          img {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
    const blogData = data.contentJson.content
    console.log("blog", blogData)
    return (
        <div className='mt-32 text-center'>
            <div className="text-lg">Read our Blog</div>
            <div className="text-5xl font-bold mt-5">Blog</div>
            <div className="text-sm mt-5">Learn more about finance from our blog. New articles published every week!</div>

            <div className='flex space-x-10 mt-12'>
                {
                    blogData.map((blog) => {
                        return (
                            <BlogCard key={blog.title} title={blog.title} description={blog.description} img={blog.img} />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Blog