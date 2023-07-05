import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import GreenContainer from './GreenContainer'
import { useEffect } from 'react'


const MidSection = () => {
    const totalStudents = 1000
    const totalHours = 300
    const totalLetters = 50
    const [students, setStudents] = useState(0);
    const [hours, setHours] = useState(0);
    const [letters, setLetters] = useState(0);
    useEffect(() => {
        counter(students, setStudents, totalStudents, totalStudents / 50)
        counter(hours, setHours, totalHours, totalHours / 50)
        counter(letters, setLetters, totalLetters, totalLetters / 50)
    })
    const counter = (number, setNumber, totalNumber, increment) => {
        function countDown() {
            const timeOut = setTimeout(async () => {

                setNumber(number + increment)
                // countDown()
            }, 80)
            if (number === totalNumber) {
                clearTimeout(timeOut)
                setNumber(totalNumber)
            }

        }
        countDown();

    }
    return (
        <>
            <div className='flex flex-col lg:flex-row mt-10 items-center'>
                <div className='lg:w-3/5 text-3xl'>Learn from top consultants in the Industry.</div>
                <div className='flex justify-evenly w-full lg:w-2/5 mt-6 lg:mt-0'>
                    <div className='grayscale hover:grayscale-0'>
                        <StaticImage
                            src="../images/BCG-logo.jpeg"
                            alt="A bcg"
                            placeholder="blurred"
                            layout="fixed"
                            width={180}
                            height={70}
                        />
                    </div>
                    <div className='grayscale hover:grayscale-0'>
                        <StaticImage
                            src="../images/mckinsey.svg"
                            alt="A mckinsey"
                            placeholder="blurred"
                            layout="fixed"
                            width={180}
                            height={70}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <GreenContainer>
                    <div className='p-10'>
                        <div className='text-3xl font-semibold text-center leading-loose'>If you have any questions in your mind, Just <span className='text-2xl text-[#39808a]'>Click Here</span> to write or you can
                            mail at <span className='text-2xl text-[#39808a]'> info@wisdomhatch.com</span>
                        </div>
                    </div>
                </GreenContainer>
            </div>

            <div className='mt-20'>
                <GreenContainer>
                    <div className='flex justify-evenly text-2xl md:text-4xl font-semibold p-4 my-4 md:p-8 md:my-9'>
                        <div > ${students}+  <div className='font-normal text-xs md:text-sm'>Students Enrolled</div></div>
                        <div>${hours} + <div className='font-normal text-xs md:text-sm'>Teaching Hours</div></div>
                        <div>${letters} K + <div className='font-normal text-xs md:text-sm'>Newsletter</div></div>
                    </div>
                </GreenContainer>
            </div>

        </>
    )
}

export default MidSection