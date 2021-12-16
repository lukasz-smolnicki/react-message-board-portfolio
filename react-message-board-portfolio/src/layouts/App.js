import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'


class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    data: []
  };

  componentDidMount() {
    if (localStorage.getItem("data") === null) {
      fetch("data/data.json")
        .then(res => res.json())
        .then(
          (result) => {
            localStorage.setItem('data', JSON.stringify(result));
            this.setState({
              isLoaded: true,
              data: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    } else {
      this.setState({
        isLoaded: true,
        data: JSON.parse(localStorage.getItem("data"))
      })
    }
  }

  render() {
    const { error, isLoaded, data } = this.state;
    return (
      <>
        <Header />
        <Nav />
        <Main error={error} isLoaded={isLoaded} data={data} />
        <Footer />
      </>
    )
  }
}

export default App