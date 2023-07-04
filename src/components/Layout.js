import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='overflow-scroll'>
            <div className="mx-4 sm:mx-4 md:mx-10 xl:mx-36">
                <Navbar />
                {children}
            </div>
            {/* <Footer /> */}
        </div>

    )
}

export default Layout