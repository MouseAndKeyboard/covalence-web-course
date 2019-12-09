import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "Jeff Besos",
      items: [{value: 'a', id: 1}, {value: 'b', id: 2}, {value: 'c', id: 3} ]
    }

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(name){
    this.setState({ name });
  }

  render(){

    return (  
      <div>
        <h1>Welcome to React</h1>
        <input 
          type="text" 
          placeholder="What's your name?"
          onChange={event => this.handleInputChange(event.target.value) }
           />
        <button>Save Name</button>
        <List items={this.state.items}/>
        <Comment
            author={ { name: this.state.name, avatarUrl: "http://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg"} }
            text="How's it going?"
          /> 
      </div>
    );
  }

}

export default App;
