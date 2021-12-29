import React from 'react'

const Button = (props) => {
    const { action, value, name } = props
    return (
        <>
            <button onClick={() => action(value)}>{name}</button>
        </>
    )
}

export default Button