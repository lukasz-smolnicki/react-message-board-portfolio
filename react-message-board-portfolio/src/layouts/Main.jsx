import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import SignIn from '../pages/SignIn.jsx'
import SignUp from '../pages/SignUp.jsx'
import Board from '../pages/Board.jsx'
import Error from '../pages/Error.jsx'
import Title from '../components/Title.jsx'
import Profile from '../pages/Profile.jsx'
import { ProtectedLogin, ProtectedProfile } from '../pages/ProtectetRoutes.jsx'

const Main = (props) => {
    const { state, handleSignUp, handleSignIn, handleChange } = props
    return (
        <main>
            <Routes>
                <Route path='' element={<Board state={state} />} />
                <Route path='title/:id' element={<Title state={state} />} />
                <Route element={<ProtectedProfile state={state} />}>
                    <Route path='profile/:id' element={<Profile />} />
                </Route>
                <Route element={<ProtectedLogin state={state} />}>
                    <Route path='signup' element={<SignUp
                        state={state}
                        handleChange={handleChange}
                        handleSubmit={handleSignUp} />} />
                    <Route path='signin' element={
                        <SignIn
                            state={state}
                            handleChange={handleChange}
                            handleSubmit={handleSignIn}
                        />}
                    />
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    )
}

export default Main