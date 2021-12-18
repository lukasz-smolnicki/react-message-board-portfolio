import React from 'react'

const Title = (props) => {
    console.log(props.title)
    const { body, date } = props.title
    return (
        <li>{body} {date}</li>
    )
}

export default Title;