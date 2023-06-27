import React from 'react'
import { BsFillBagFill, BsBagCheck } from 'react-icons/bs';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

// React Components
import Button from './Button';



const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div>
                <StaticImage
                    src="../images/logo.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="fixed"
                    width={180}
                    height={70}
                />
            </div>
            <div className='flex space-x-10 text-lg font-extralight'>
                <div ><Link to="/">Home</Link></div>
                <div ><Link to="/">Cources</Link></div>
                <div ><Link to="/">Testimonial</Link></div>
                <div ><Link to="/about">About</Link></div>
                <div ><Link to="/">Login</Link></div>
                {/* <div >Cources</div>
                <div >Testimonial</div>
                <div>About</div>
                <div>Login</div> */}
            </div>
            <div className='flex space-x-4 items-center'>
                <BsBagCheck style={{ fontSize: 30 }} />
                {/* <StaticImage src={BiShoppingBag} alt='Shopping Bag' /> */}
                <Button value={'ENROLL NOW!'} />
            </div>
        </div>
    )
}

export default Navbar