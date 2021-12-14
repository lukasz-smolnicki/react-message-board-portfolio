import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
  state = {
    loggedUserId: null
  }
  componentDidMount() {
    const loggedUserId = localStorage.getItem("loggedUserId")
    this.setState({
      loggedUserId
    })
  }
  render() {
    console.log(this.state.loggedUserId)
    return (
      <>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App