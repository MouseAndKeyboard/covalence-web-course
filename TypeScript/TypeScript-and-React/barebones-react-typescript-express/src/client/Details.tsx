import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IDetailsProps extends RouteComponentProps<{ name: string }> {

}

interface IDetailsState {
    name: string;
}

export default class Details extends React.Component<IDetailsProps, IDetailsState> {
    constructor(props : IDetailsProps){
        super(props);
        
        this.state = {name: this.props.match.params.name }
    }

    render() {
    return <h1>{this.state.name}</h1>;
    }
}