import React from 'react'
import GreenContainer from './GreenContainer'
import { AiFillStar } from 'react-icons/ai';
// import { IoStarHalf } from 'react-icons/io';




const TestimonialCard = ({ description, name, title, star }) => {

    const myExample = () => {
        let myArray = []
        for (let i = 0; i < star; i = i + 1) {

            // if (star - i == 0.5) {
            //     star = 0
            //     // console.log("hello")
            //     myArray.push(<IoStarHalf style={{ color: "orange" }} />)
            // }
            myArray.push(<AiFillStar style={{ color: "orange" }} />)
        }
        return myArray
    }
    return (
        <GreenContainer width={"fitcontent"}>
            <div className='p-7'>
                <div className='text-sm leading-loose'>
                    {description}
                </div>
                <div className='flex mt-3 mb-3' >
                    {myExample()}
                </div>
                <div className="text-lg font-serif">{name}</div>
                <div className="text-sm mt-1.5">{title}</div>
            </div>
        </GreenContainer>
    )
}

export default TestimonialCard