import React from 'react';
import $ from 'jquery';
import { useState, useEffect } from "react";
import Chirp from './Chirp'
import { RouteComponentProps } from 'react-router-dom';
import Header from './Header';

export interface IAppProps extends RouteComponentProps<{ id: string }> {
}

interface chirp {
    chirpid: number,
    message: string,
    _created: Date,
    name: string
}

export interface IAppState {
    chirps: Array<chirp>
}
class Mentions extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = { chirps: [] }
    }

    componentDidMount() {
        $.ajax(`/api/chirps/mentions/${this.props.match.params.id}`, { method: "GET" })
            .then((resp: Array<any>) => {
                console.log(resp);
                this.setState({ chirps: resp });
            });
    }

    render() {

        let cps = this.state.chirps.map(chirp => {
            return <Chirp poster={chirp.name} message={chirp.message} id={chirp.chirpid.toString()} key={chirp.chirpid} />

        })

        alert(this.state.chirps.length);

        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="timeline d-flex flex-column">
                        {this.state.chirps}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Mentions;