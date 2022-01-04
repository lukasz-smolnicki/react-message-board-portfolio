import React from 'react'
import { NavLink } from 'react-router-dom'
import TitlesButtonBar from './TitlesButtonBar.jsx'

const Titles = (props) => {
    const { handleRemoveTitle } = props
    const { users } = props.state.data
    const { loggedUserId } = props.state
    const { title } = props
    const user = users.find(user => title.userId === user.id)
    return (
        <li>
            <NavLink to={`/title/${title.id}`}>{title.name}</NavLink>
            <p>{title.date}</p>
            <p>{user.name}</p>
            {loggedUserId && loggedUserId === user.id ? <TitlesButtonBar title={title} handleRemoveTitle={handleRemoveTitle} /> : null}
        </li>
    )
}

export default Titles