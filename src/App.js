import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">Di pulse Q&A</p>
        <h3>
          Pulse provides business insights from crowdsourced data. We are a
          VC-backed company based in SF and love all things research and data.
          We’re passionate about driving data-driven decision making for the
          world’s professionals, one question at a time.
        </h3>
      </div>
    )
  }
}

export default App
