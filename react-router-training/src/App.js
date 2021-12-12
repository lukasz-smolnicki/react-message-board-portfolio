import React from 'react'
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
const Home = () => <h1>Strona główna</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt</h1>
const ErrorPage = () => <h1>Kontakaaat</h1>
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                {/* <li><a href='/'>Start</a></li>
                <li><a href='/news'>Aktualności</a></li>
                <li><a href='/contact'>Kontakt</a></li> */}
                {/* <li><Link to='/'>Start</Link></li>
                <li><Link to='/news'>Aktualności</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li> */}
                <li><NavLink to='/' activeClassName="home_selected">Start</NavLink></li>
                <li><NavLink to='/news' activeclassname="news_selected" >Aktualności</NavLink></li>
                <li><NavLink to='/contact' activeclassname="contact_selected">Kontakt</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;