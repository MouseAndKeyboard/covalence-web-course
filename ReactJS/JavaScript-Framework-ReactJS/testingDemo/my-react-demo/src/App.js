import React from 'react';
import logo from './logo.svg';
import './App.css';

const Welcome = props => {
  return <h1>Hello, {props.name}</h1>
}

const App = () => {
  let element = (
    <div>
      <Welcome name="World" />
      <Welcome name="Jeff" />
      <Welcome name="Howdy" />
    </div> 
  );
  return element;
}

export default App;
