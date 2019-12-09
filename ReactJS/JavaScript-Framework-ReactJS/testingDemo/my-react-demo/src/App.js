import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "Jeff Besos"
    }
  }

  render(){
    return (
      <div>
        <h1>Welcome to React</h1>
        <input 
          type="text" 
          placeholder="What's your name?"
          onChange={event => this.setState({name: event.target.value}) }
           />
        <Comment
            author={ { name: this.state.name, avatarUrl: "http://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg"} }
            text="How's it going?"
          /> 
      </div>
    );
  }

}

export default App;
