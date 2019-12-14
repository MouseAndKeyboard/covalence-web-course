import React, { Component } from 'react'
import Chirp from './Chirp'

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [],
            name: "",
            message: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleClick(eventArgs){
        eventArgs.preventDefault();

        let timeStamp = (new Date()).getTime();

        this.state.chirps.push({
            user: this.state.name,
            message: this.state.message,
            key: timeStamp
        });

        this.setState({chirps: this.state.chirps});       
    }

    handleUsernameChange(eventArgs) {
        this.setState(
            {
                name: eventArgs.target.value
            }
        )
    }

    handleMessageChange(eventArgs) {
        this.setState(
            {
                message: eventArgs.target.value
            }
        )
    }

    render() {

        console.log(this.state.chirps);
        

        let chirps = this.state.chirps.map(chirp => {
            return (
                <Chirp poster={chirp.user} message={chirp.message} timeStamp={chirp.key} key={chirp.key} />
            )
        });

        return (
            <React.Fragment>
                <form className="p-3 my-2 bg-info">
                    <div className="row">
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Display name"
                                onChange={this.handleUsernameChange}
                            />
                        </div>
                        <div className="col-8">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Message" 
                                onChange={this.handleMessageChange}
                            />
                        </div>
                        <div className="col-1 text-right">
                            <button 
                                className="btn btn-primary" 
                                onClick={this.handleClick}>Send</button>
                        </div>
                    </div>
                </form>

                <div className="timeline d-flex flex-column">
                    {chirps}
                </div>
            </React.Fragment>
        );
    }
}

export default Timeline