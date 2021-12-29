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
    newTitleIsActive: false,
    title: '',
    post: ''
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
      loggedUserId: false,
      newTitleIsActive: false,
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

  handleAddTitle = (e) => {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem('data'))
    const { loggedUserId } = this.state
    const date = new Date()
    const formatDate = `${date.getFullYear()}-10-10 10:52`
    if (this.state.title === '' || this.state.post === '') {
      alert('Enter title name and post description')
    } else {
      ++data.counter.titleId
      ++data.counter.postId
      const newTitle = {
        id: data.counter.titleId,
        userId: loggedUserId,
        body: this.state.title,
        date: formatDate
      }
      const newPost = {
        id: data.counter.postId,
        userId: loggedUserId,
        titleId: data.counter.titleId,
        body: this.state.post,
        date: formatDate
      }
      data.posts.push(newPost)
      data.titles.push(newTitle)
      this.setState({
        newTitleIsActive: false,
        data
      })
      localStorage.setItem('data', JSON.stringify(this.state.data))
    }
  }

  acitvieAddNewTitle = (value) => {
    this.setState({
      newTitleIsActive: value
    })
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
    console.log(new Date().getFullYear())
    console.log(new Date().getMonth())
    console.log(new Date().getDate())
    // console.log(new Date().getDay())
    console.log(new Date().getHours())
    console.log(new Date().getMinutes())

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
            handleAddTitle={this.handleAddTitle}
            acitvieAddNewTitle={this.acitvieAddNewTitle}
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