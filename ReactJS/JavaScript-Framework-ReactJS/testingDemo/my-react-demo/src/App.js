import React from 'react';
import logo from './logo.svg';
import './App.css';
import comment from './components/Comment'

const Welcome = props => {
  return <h1>Hello, {props.name}</h1>
}

const App = () => {
  let element = (
    <div>
      <comment name="World" />
    </div> 
  );
  return element;
}

export default App;
