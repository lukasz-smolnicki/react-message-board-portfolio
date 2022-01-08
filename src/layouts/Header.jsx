import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Header = (props) => {
    const { loggedUserId } = props.state
    const params = useParams()

    if (loggedUserId === false) {
        return (
            <div className='jumbotron my-5'>
                <h1 className='display-4'>Hello, world!</h1>
                <p className='lead'>This is a simple message board react app for my portfolio.</p>
                <p>Now you should SignIn using login: 'Wookie' password: 'hireme' or create your own account using SignUp tab</p>
            </div>
        )
    } else {
        const users = props.state.data.users
        const user = users.find(user => user.id === loggedUserId)
        console.log(params)
        return (
            <>
                <div className='jumbotron my-5'>
                    <h1 className='display-4'>Hello, {user.name}!</h1>
                    <p className='lead'>This is a simple message board aplication for my portfolio.</p>
                    <p>Now you can add, edit, remove threads and posts. For more info go to section <Link className='link-secondary' to='/about'>about</Link></p>
                </div>
            </>
        )
    }
}

export default Header