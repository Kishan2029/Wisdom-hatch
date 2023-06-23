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
              gatsbyImageData
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

            <div className='mt-6'>
                {

                }
            </div>
        </div>
    )
}


export default Blog