import React from 'react'
import { NavLink } from 'react-router-dom'

const Titles = (props) => {
    const { title } = props
    return (
        <li><NavLink to={`/title/${title.id}`}>{title.body}</NavLink></li>
    )
}

export default Titles