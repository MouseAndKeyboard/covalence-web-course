import React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import { RouteComponentProps } from  'react-router-dom';

interface IEditProps extends RouteComponentProps<{id: string}> {

}

interface IEditState {

}


export default class Edit extends React.Component<IEditProps, IEditState>  {
    constructor(props : IEditProps){
        super(props);
    }

    render() {
        return (
            <h1>{this.props.match.params.id}</h1>
        );
    }

}