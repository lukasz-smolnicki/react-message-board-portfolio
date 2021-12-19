import React from 'react'

const Title = (props) => {
    console.log(props)
    const { body, date } = props.title
    return (
        <article>
            <li>{body} {date}</li>
        </article>
    )
}

export default Title;