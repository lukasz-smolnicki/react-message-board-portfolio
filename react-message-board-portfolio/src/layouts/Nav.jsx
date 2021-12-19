import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <NavLink to='/'>Board</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            <NavLink to='/signin'>SignIn</NavLink>
        </nav>
    )
}

export default Nav

