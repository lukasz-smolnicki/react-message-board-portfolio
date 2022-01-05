import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './layouts/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>, document.getElementById('root')
)
