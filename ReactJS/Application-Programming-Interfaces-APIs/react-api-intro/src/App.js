import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
  constructor(props){
    super(props);

    this.API_URL = ""
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => res.json())
    .then(obj => console.log(obj))
  }

  render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
