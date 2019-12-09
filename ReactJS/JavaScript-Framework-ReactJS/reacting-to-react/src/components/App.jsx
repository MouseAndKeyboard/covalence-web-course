import React, { Component } from 'react'

// const App = (props) => {
//     return (
//         <h1>{props.message}</h1>
//     )
// }

// export default App

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { text: props.message,
                       inputValue: "",
                       hasLoaded: false }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleClick(event) {
        this.setState((currentState, currentProps) => {
            return {
                hasLoaded: !currentState.hasLoaded
            }
        });
    }

    componentDidMount(){
        this.setState((currentState, currentProps) => {
            return {
                hasLoaded: !currentState.hasLoaded
            }
        });
    }

    render() {

        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1>{this.props.message}-{this.state.text}</h1>
                    <input
                        type="text"
                        placeholder={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button 
                        className="clicker"
                        onClick={this.handleClick}>
                        Click Me!
                    </button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button 
                        className="clicker"
                        onClick={this.handleClick}>
                        Click Me!
                    </button>
                </React.Fragment>
            );
        }

        
    }
}

export default App