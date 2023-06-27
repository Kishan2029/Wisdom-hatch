import React from 'react'

const GreenContainer = ({ children, border = true }) => {
    return (
        <div className={`gradient rounded-3xl ${border ? 'border-black border-2' : ''} `}>{children}</div>
    )
}

export default GreenContainer