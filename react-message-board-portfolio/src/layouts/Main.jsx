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

const Main = (props) => {
    const { state, handleSubmit, handleChange } = props
    const { error, isLoaded } = props.state
    if (error) {
        return <p>ERROR: Something's going wrong</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <main>
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path='' element={<Board state={state} />} />
                    <Route path='title/:id' element={<Title state={state} />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='signin' element={
                        <SignIn
                            state={state}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />}
                    />
                </Routes>
            </main>
        )
    }
}

export default Main