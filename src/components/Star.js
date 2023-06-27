import React from 'react'
import { FaStarHalf, FaStar } from 'react-icons/fa';
const Star = ({ star }) => {
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
        <div className='flex space-x-1 content-center' >
            {myExample()}

        </div>
    )
}

export default Star