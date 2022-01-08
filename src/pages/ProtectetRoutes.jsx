import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLogin = (props) => {
    const { loggedUserId } = props.state

    return loggedUserId ? <Navigate to={`/`} /> : <Outlet />
}

const ProtectedProfile = (props) => {
    const { loggedUserId } = props.state

    return loggedUserId ? <Outlet /> : <Navigate to='/signin' />
}

export { ProtectedLogin, ProtectedProfile }