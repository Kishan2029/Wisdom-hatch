import React from 'react'
import { BsFillBagFill } from 'react-icons/bs';
import Button from './Button';
import { StaticImage } from "gatsby-plugin-image"



const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div><StaticImage
                src="../images/logo.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={180}
                height={70}
            /></div>
            <div className='flex space-x-10 text-lg font-extralight'>
                <div >Home</div>
                <div >Cources</div>
                <div >Testimonial</div>
                <div>About</div>
                <div>Login</div>
            </div>
            <div className='flex space-x-4 items-center'>
                <BsFillBagFill style={{ fontSize: 23 }} />
                {/* <StaticImage src={BiShoppingBag} alt='Shopping Bag' /> */}
                <Button value={'ENROLL NOW!'} />
            </div>
        </div>
    )
}

export default Navbar