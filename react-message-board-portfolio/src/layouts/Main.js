import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Board from "../pages/Board";

const Main = (props) => {
    const { error, isLoaded, data } = props
    if (error) {
        return <p>ERROR: Something's going wrong</p>
    } else if (!isLoaded) {
        return <p>loading</p>
    } else {
        console.log(data.counter.userId)
        return (
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route exact path="/" element={<Board />} />
            </Routes>
        )
    }
}

export default Main;