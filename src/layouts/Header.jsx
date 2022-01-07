import React from 'react'

const Header = (props) => {
    const { loggedUserId } = props.state

    if (loggedUserId === false) {
        return (
            <div className="jumbotron my-5">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple board react app for my portfolio.</p>
                <p>Now you should SignIn using login: Wookie password: hireme or create your own account using SignUp tab</p>
            </div>
        )
    } else {
        const users = props.state.data.users
        const user = users.find(user => user.id === loggedUserId)

        return (
            <>
                <div className="jumbotron my-5">
                    <h1 className="display-4">Hello, {user.name}!</h1>
                    <p className="lead">This is a simple board aplication for my portfolio.</p>
                    <p>Now you can add, edit, remove threads and posts</p>
                </div>

            </>
        )
    }
}

export default Header