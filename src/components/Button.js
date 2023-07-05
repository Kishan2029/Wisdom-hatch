import React from 'react'

const Button = ({ value, height }) => {
    console.log("")
    return (
        <button className={`button text-sm font-semibold h-14 w-fit px-5 rounded-xl `} >{value}</button>
    )
}

export default Button