import React from 'react'
import OfferCard from './OfferCard'
import OfferData from "../content/OfferData.json"
import Button from './Button'
import { graphql, useStaticQuery } from 'gatsby'


const OfferSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson(title: {eq: "Offer Data"}) {
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
  // const data = OfferData.content
  return (
    <div className='mt-10'>
      <div className='text-lg font-mono'>What We Offer</div>
      <div className='text-4xl mt-2'>Finance Courses that will make you Smart!</div>

      <div className='flex flex-col flex-wrap space-y-5  shadow-slate-950 shadow-black mt-4 md:flex-row lg:flex-nowrap  lg:space-y-0 lg:space-x-8'>
        {
          blogData.map((item) => {
            return (
              <OfferCard img={item.img} description={item.description} title={item.title} />
            )
          })
        }

      </div>
      <div className="mt-5">
        <Button value={"LEARN MORE"} />
      </div>

    </div>
  )
}

export default OfferSection