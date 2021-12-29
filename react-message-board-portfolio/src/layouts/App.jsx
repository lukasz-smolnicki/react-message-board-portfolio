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
    loggedUserId: false,
  }

  resetFormInputs = () => {
    this.setState({
      name: '',
      password: '',
      email: ''
    })
  }

  handleSignOut = () => {
    localStorage.removeItem('loggedUserId')
    this.setState({
      loggedUserId: false
    })
  }

  handleSignIn = (e) => {
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
      localStorage.setItem('loggedUserId', `${user.id}`)
    }
  }

  handleSignUp = (e) => {
    e.preventDefault()
    const data = this.state.data
    const user = data.users.find(user => user.name === this.state.name)
    const email = data.users.find(user => user.email === this.state.email)
    if (this.state.name === '' || this.state.email === '' || this.state.password === '') {
      alert('Enter login, email and password')
    } else if (user !== undefined || email !== undefined) {
      alert('Nick or email already exists')
    } else {
      const newUser = {
        id: ++data.counter.userId,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      data.users.push(newUser)
      this.setState({
        data,
        loggedUserId: data.counter.userId
      })
      localStorage.setItem('data', JSON.stringify(this.state.data))
      localStorage.setItem('loggedUserId', data.counter.userId)
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleRemoveTitle = (id) => {
    const data = this.state.data
    const titles = data.titles
    const posts = data.posts
    const filteredTitles = titles.filter(title => title.id !== id)
    const filteredPosts = posts.filter(post => post.titleId !== id)
    data.titles = [...filteredTitles]
    data.posts = [...filteredPosts]
    this.setState({
      data
    })
    localStorage.setItem('data', JSON.stringify(data))
  }

  componentDidMount() {
    const userStorage = localStorage.getItem('loggedUserId')
    const dataStorage = localStorage.getItem('data')
    if (dataStorage === null) {
      fetch('data/dummyData.json')
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
        loggedUserId: parseInt(userStorage)
      })
    }
  }

  render() {
    const { error, isLoaded } = this.state
    if (error) {
      return <p>ERROR: Something's going wrong</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <>
          <Header />
          <Nav
            state={this.state}
            handleSignOut={this.handleSignOut} />
          <Main
            state={this.state}
            handleRemoveTitle={this.handleRemoveTitle}
            handleChange={this.handleChange}
            handleSignIn={this.handleSignIn}
            handleSignUp={this.handleSignUp}
          />
          <Footer />
        </>
      )
    }
  }
}

export default App