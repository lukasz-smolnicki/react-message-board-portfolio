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
    const { state, handleAddTitle, handleSignUp, handleSignIn, handleChange, handleRemoveTitle, handleRemovePost, acitvieAddNewTitle } = props
    return (
        <main>
            <Routes>
                <Route path='' element={
                    <Board
                        state={state}
                        handleRemoveTitle={handleRemoveTitle}

                        acitvieAddNewTitle={acitvieAddNewTitle}
                        handleChange={handleChange}
                        handleAddTitle={handleAddTitle} />}
                />
                <Route path='title/:id' element={<Title
                    state={state}
                    handleRemovePost={handleRemovePost} />} />
                <Route element={<ProtectedProfile state={state} />}>
                    <Route path='profile/:id' element={<Profile />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route element={<ProtectedLogin state={state} />}>
                    <Route path='signup' element={
                        <SignUp
                            state={state}
                            handleChange={handleChange}
                            handleSignUp={handleSignUp} />
                    } />
                    <Route path='signin' element={
                        <SignIn
                            state={state}
                            handleChange={handleChange}
                            handleSignIn={handleSignIn}
                        />}
                    />
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    )
}

export default Main