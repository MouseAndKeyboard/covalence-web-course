import React, { Component } from 'react'
import $ from 'jquery';
import Chirp from './Chirp'
import {useState, useEffect} from "react";

interface ITimelineChirp {
    id: number
    authorid: number,
    message: string,
    author: string,
    _created: Date
}

interface ITimelineState {
    chirps: Array<ITimelineChirp>,
    name: string,
    message: string
}

interface ITimelineProps {

}

class Timeline extends Component<ITimelineProps, ITimelineState> {
    constructor(props: Readonly<ITimelineProps>) {
        super(props);

        this.state = {
            chirps: [],
            name: "",
            message: ""
        }
    }

    loadChirps() {
        fetch('/api/chirps')
        .then(resp => resp.json())
        .then(obj => {
            let downloadedChirps: Array<ITimelineChirp> = obj;
            this.setState({ chirps: downloadedChirps });
        });
    }

    componentDidMount() {
        this.loadChirps();
    }

    handleClick = (eventArgs: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        eventArgs.preventDefault();

        $.ajax('/api/chirps', { type: "POST", contentType: "application/json; charset=utf-8",  data: JSON.stringify({ author: this.state.name, message: this.state.message }) });
        this.loadChirps();
    }

    handleUsernameChange = (eventArgs: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                name: eventArgs.target.value
            }
        )
    }

    handleMessageChange = (eventArgs: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                message: eventArgs.target.value
            }
        )
    }

    render() {

        let chirps = this.state.chirps.map(chirp => {
            return (
                <Chirp poster={chirp.author} message={chirp.message} key={chirp.id} id={chirp.id.toString()} />
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