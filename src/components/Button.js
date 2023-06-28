import React from 'react'

const Button = ({ value, height = 14 }) => {
    return (
        <button className={`button text-sm font-semibold h-${height} w-fit px-5 rounded-xl`} >{value}</button>
    )
}

export default Button