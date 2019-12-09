import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Timeline />
      </div>
    </React.Fragment>
  );
}

export default App;
