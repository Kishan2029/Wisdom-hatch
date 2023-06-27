import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='overflow-scroll'>
            <div className="mx-36 ">
                <Navbar />
                {children}
            </div>
            {/* <Footer /> */}
        </div>

    )
}

export default Layout