import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = (props) => {
    const { loggedUserId } = props.state

    return loggedUserId ? <Navigate to='/' /> : <Outlet />
}

export default ProtectedRoutes