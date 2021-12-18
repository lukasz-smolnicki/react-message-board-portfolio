import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import Titles from "../pages/Titles";

const Main = (props) => {
    const { error, isLoaded, data } = props
    if (error) {
        return <p>ERROR: Something's going wrong</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <main>
                <Routes>
                    <Route path="/" element={<Titles data={data} />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </main>
        )
    }
}

export default Main;