
// import logo from './logo.svg';
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import DaterPage from './pages/DaterPage.js'
import AddDaterPage from './pages/AddDaterPage.js'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/add-dater" component={AddDaterPage} />
            <Route exact path="/PC/:daterID" component={DaterPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
