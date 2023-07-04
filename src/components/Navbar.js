import React from 'react'
import { BsFillBagFill, BsBagCheck } from 'react-icons/bs';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { HiOutlineBars3 } from 'react-icons/hi2';

// React Components
import Button from './Button';



const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div>
                <StaticImage
                    src="../images/logo.png"
                    alt="A Wisdom Logos"
                    placeholder="blurred"
                    layout="fixed"
                    width={180}
                    height={70}
                />
            </div>
            <div className='hidden lg:flex space-x-10 text-lg font-extralight'>
                <div ><Link to="/">Home</Link></div>
                <div ><Link to="/courses">Cources</Link></div>
                <div ><Link to="/testimonial">Testimonial</Link></div>
                <div ><Link to="/about">About</Link></div>
                <div ><Link to="/login">Login</Link></div>
                {/* <div >Cources</div>
                <div >Testimonial</div>
                <div>About</div>
                <div>Login</div> */}
            </div>
            <div className='hidden lg:flex space-x-4 items-center'>
                <BsBagCheck style={{ fontSize: 30 }} />

                <Button value={'ENROLL NOW!'} height={14} />
            </div>
            <div className='lg:hidden'>
                <div className='button w-fit p-1 rounded-md '>
                    <HiOutlineBars3 fontSize={30} />
                </div>
            </div>
        </div>
    )
}

export default Navbar