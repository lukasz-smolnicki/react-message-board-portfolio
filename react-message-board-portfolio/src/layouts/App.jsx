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
    body: '',
    loggedUserId: false,
    newTitleIsActive: false,
    title: '',
    post: ''
  }

  resetFormInputs = () => {
    this.setState({
      name: '',
      password: '',
      email: '',
      body: '',
      title: '',
      post: ''
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
    this.resetFormInputs()
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
        password: this.state.password,
        date: this.getCurrentTime()
      }
      data.users.push(newUser)
      this.setState({
        data,
        loggedUserId: data.counter.userId
      })
      localStorage.setItem('data', JSON.stringify(this.state.data))
      localStorage.setItem('loggedUserId', data.counter.userId)
    }
    this.resetFormInputs()
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleRemoveTitle = (id) => {
    const data = JSON.parse(localStorage.getItem('data'))
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

  handleRemovePost = (id) => {
    const data = JSON.parse(localStorage.getItem('data'))
    const posts = data.posts
    const filteredPosts = posts.filter(post => post.id !== id)
    data.posts = [...filteredPosts]
    this.setState({
      data
    })
    localStorage.setItem('data', JSON.stringify(data))
  }

  handleEditPost = (id, value) => {
    const data = JSON.parse(localStorage.getItem('data'))
    const posts = data.posts
    const postIndex = posts.findIndex(post => post.id === id)
    data.posts[postIndex].body = value
    this.setState({
      data
    })
    localStorage.setItem('data', JSON.stringify(data))
  }

  getCurrentTime = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const formatDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
    return formatDate
  }

  handleAddPost = (e, titleId) => {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem('data'))
    const { loggedUserId } = this.state
    if (this.state.post === '') {
      alert('Enter post message')
    } else {
      ++data.counter.postId
      const newPost = {
        id: data.counter.postId,
        userId: loggedUserId,
        titleId: titleId,
        body: this.state.post,
        date: this.getCurrentTime()
      }
      data.posts.push(newPost)
      this.setState({
        data
      })
      localStorage.setItem('data', JSON.stringify(data))
    }
    this.resetFormInputs()
  }

  handleAddTitle = (e) => {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem('data'))
    const { loggedUserId } = this.state
    if (this.state.name === '' || this.state.body === '') {
      alert('Enter title name and post description')
    } else {
      ++data.counter.titleId
      const newTitle = {
        id: data.counter.titleId,
        userId: loggedUserId,
        name: this.state.name,
        body: this.state.body,
        date: this.getCurrentTime()
      }
      data.titles.push(newTitle)
      this.setState({
        newTitleIsActive: false,
        data
      })
      localStorage.setItem('data', JSON.stringify(data))
    }
    this.resetFormInputs()
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
            handleAddPost={this.handleAddPost}
            acitvieAddNewTitle={this.acitvieAddNewTitle}
            handleEditPost={this.handleEditPost}
            handleRemoveTitle={this.handleRemoveTitle}
            handleRemovePost={this.handleRemovePost}
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