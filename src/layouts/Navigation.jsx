import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    const { handleSignOut } = props
    const { loggedUserId } = props.state

    if (loggedUserId === false) {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/'>Board</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/signup'>SignUp</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/signin'>SignIn</NavLink>
                </li>
            </ul>
        )
    } else {
        const users = props.state.data.users
        const user = users.find(user => user.id === loggedUserId)

        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/'>Board</NavLink>
                </li>
                <li className="nav-item me-auto">
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                </li>
                <span className="navbar-text me-2">
                    Signed in as: <NavLink to='/'>{user.name}</NavLink>
                </span>
                <button className="btn" onClick={() => handleSignOut()}>SignOut</button>
            </ul>
            // <Navbar>
            //     <NavLink to='/'>Board</NavLink>
            //     <NavLink to='/profile'>Profile</NavLink>
            //     <p>Witaj {user.name},</p>
            //     <button onClick={() => handleSignOut()}>SignOut</button>
            // </Navbar>
        )
    }
}

export default Navigation

