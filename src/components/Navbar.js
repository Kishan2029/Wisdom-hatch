import React, { useEffect, useState } from 'react'
import { BsFillBagFill, BsBagCheck } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { HiOutlineBars3 } from 'react-icons/hi2';

// React Components
import Button from './Button';



const Navbar = () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        console.log("open", open)
    }, [open])
    return (
        <div className=''>
            <div className={'flex  justify-between items-center mt-5'}>

                <div className={!open && 'hidden'}>
                    <div className='text-white' style={{ width: '180px', height: '70px' }}>Hi</div>
                </div>
                <div className={open && 'hidden'}>
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
                    <div className='button w-fit p-1 rounded-md h-10'>
                        <button className='startAnimate' onClick={() => setOpen(true)}>
                            <HiOutlineBars3 fontSize={30} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Menu */}
            {open &&
                <div className='animate bg-white drop-shadow-md ml-0 pt-2 pl-8 z-[500] top-10 left-0 absolute  h-full w-3/4 sm:max-md:w-2/3 md:w-1/2'
                    style={{ transitionDuration: 'div 1s' }}
                >

                    <div className='flex justify-between items-center'>
                        <StaticImage
                            src="../images/logo.png"
                            alt="A Wisdom Logos"
                            placeholder="blurred"
                            layout="constrained"
                            width={120}
                            height={45}
                        />
                        <div className='mr-4 transition duration-150'>
                            <AiOutlineClose className='button p-2 rounded-lg' onClick={() => setOpen(false)} fontSize={35} />
                        </div>
                    </div>

                    <div className='flex space-y-7 flex-col  mt-10 ml-2'>
                        <div onClick={() => setOpen(false)} ><Link to="/">Home</Link></div>
                        <div onClick={() => setOpen(false)} ><Link to="/courses">Cources</Link></div>
                        <div onClick={() => setOpen(false)} ><Link to="/testimonial">Testimonial</Link></div>
                        <div onClick={() => setOpen(false)} ><Link to="/about">About</Link></div>
                        <div onClick={() => setOpen(false)} ><Link to="/login">Login</Link></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar