import React from 'react'

const Button = ({ value }) => {
    return (
        <button className='text-sm h-14 w-fit px-5 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]  bg-gradient-to-r from-cyan-500 to-blue-500' >{value}</button>
    )
}

export default Button