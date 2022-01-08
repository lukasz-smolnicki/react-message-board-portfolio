import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {
    const { handleSignOut } = props
    const { loggedUserId } = props.state

    if (loggedUserId === false) {
        return (
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <NavLink className='nav-link link-dark' aria-current='page' to='/'>Board</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link link-dark' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link link-dark' to='/signup'>SignUp</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link link-dark' to='/signin'>SignIn</NavLink>
                </li>
            </ul>
        )
    } else {
        const users = props.state.data.users
        const user = users.find(user => user.id === loggedUserId)

        return (
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <NavLink className='nav-link link-dark' aria-current='page' to='/'>Board</NavLink>
                </li>
                <li className='nav-item me-auto'>
                    <NavLink className='nav-link link-dark' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link link-dark' to={`/profile/${user.name}`}><FontAwesomeIcon icon={faUser} /> {user.name}</NavLink>
                </li>
                <button className='btn link-dark' onClick={() => handleSignOut()}><span className='navbar-text'><FontAwesomeIcon icon={faSignOutAlt} /> SignOut
                </span>
                </button>
            </ul>
        )
    }
}

export default Navigation

