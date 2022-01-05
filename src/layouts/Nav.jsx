import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    const { handleSignOut } = props
    const { loggedUserId } = props.state

    if (loggedUserId === false) {
        return (
            <nav>
                <NavLink to='/'>Board</NavLink>
                <NavLink to='/signup'>SignUp</NavLink>
                <NavLink to='/signin'>SignIn</NavLink>
            </nav>
        )
    } else {
        const users = props.state.data.users
        const user = users.find(user => user.id === loggedUserId)

        return (
            <nav>
                <NavLink to='/'>Board</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <p>Witaj {user.name},</p>
                <button onClick={() => handleSignOut()}>SignOut</button>
            </nav>
        )
    }
}

export default Nav

