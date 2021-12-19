import React from 'react'

class SingIn extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        users: [],
        messaege: [],
        invalidUser: false,
        invalidValidation: false,
    }
    componentDidMount() {
        fetch('data/users.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    })
                    localStorage.setItem('users', JSON.stringify(result))
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    userValidation = () => {
        const users = [...this.state.users]
        const userIndex = users.findIndex(user => user.name === this.state.name)
        if (this.state.name === '') {

        }

        if (userIndex === -1) {
            this.setState({
                invalidUser: true
            })
        } else {
            this.setState({
                invalidUser: false
            })
            const user = users[userIndex]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const userIndex = this.userValidation()
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        const { error, isLoaded } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input name='name' type='text' placeholder='Name' onChange={this.handleChange} />
                    {this.state.invalidUser ? <p>Nie ma takiego użytkownika</p> : null}
                    <input name='password' type='password' placeholder='Password' onChange={this.handleChange} />
                    {this.state.invalidEmail ? <p>Nie ma takiego maila</p> : null}
                    <button>Sign In</button>
                </form>
            )
        }
    }
}

export default SingIn