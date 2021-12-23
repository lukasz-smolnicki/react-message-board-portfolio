import React from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'


class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    data: [],
    name: '',
    password: '',
    email: '',
    loggedUserId: null,
  }

  resetFormInputs = () => {
    this.setState({
      name: '',
      password: '',
      email: ''
    })
  }

  handleSignOut = () => {
    this.setState({
      loggedUserId: null
    })
  }

  handleSubmitSignIn = (e) => {
    e.preventDefault()
    const users = [...this.state.data.users]
    const user = users.find(user => user.name === this.state.name)
    if (this.state.name === '' || this.state.password === '') {
      alert('Enter login and password')
    } else if (user === undefined) {
      alert('There is no user with that name')
    } else if (user.password !== this.state.password) {
      alert('Wrong password')
    } else {
      this.setState({
        loggedUserId: user.id
      })
      localStorage.setItem('user', `${user.id}`)
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    const userStorage = localStorage.getItem('user')
    const dataStorage = localStorage.getItem('data')
    if (dataStorage === null) {
      fetch('data/data.json')
        .then(res => res.json())
        .then(
          (result) => {
            localStorage.setItem('data', JSON.stringify(result))
            this.setState({
              isLoaded: true,
              data: result
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
    } else {
      this.setState({
        isLoaded: true,
        data: JSON.parse(localStorage.getItem('data'))
      })
    }
    if (userStorage !== null) {
      this.setState({
        loggedUserId: userStorage
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <Nav
          state={this.state}
          handleSignOut={this.handleSignOut} />
        <Main
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitSignIn}
        />
        <Footer />
      </>
    )
  }
}

export default App