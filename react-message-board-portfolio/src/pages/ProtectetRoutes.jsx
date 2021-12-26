import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectetRoutes = (props) => {
    const { loggedUserId } = props.state
    console.log(loggedUserId)
    return loggedUserId ? <Navigate to='/' /> : <Outlet />
}

export default ProtectetRoutes