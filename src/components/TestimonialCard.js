import React from 'react'
import GreenContainer from './GreenContainer'
import { FaStarHalf, FaStar } from 'react-icons/fa';









const TestimonialCard = ({ description, name, title, star }) => {

    const myExample = () => {
        let myArray = []
        for (let i = 0; i < star; i = i + 1) {

            if (star - i === 0.5) {
                i = star
                // console.log("hello")
                myArray.push(<FaStarHalf key={i} style={{ color: "orange" }} />)
                break
            }
            else {
                myArray.push(<FaStar style={{ color: "orange" }} />)
            }

        }

        return myArray
    }
    return (
        <GreenContainer width={"fitcontent"}>
            <div className='p-7'>
                <div className='text-sm leading-loose'>
                    {description}
                </div>
                <div className='flex mt-3 mb-3 space-x-1' >
                    {myExample()}

                </div>
                <div className="text-lg ">{name}</div>
                <div className="text-sm mt-1.5">{title}</div>
            </div>
        </GreenContainer>
    )
}

export default TestimonialCard