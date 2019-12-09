import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    let element = <h1>Welcome to React</h1>;
    return (
      <div>
        {element}
        <Comment
            author={ { name: "Jeff Besos", avatarUrl: "http://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg"} }
            text="How's it going?"
          /> 
      </div>
    );
  }

}

export default App;
