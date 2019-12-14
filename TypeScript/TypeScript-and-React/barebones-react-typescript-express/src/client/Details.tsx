import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IDetailsProps extends RouteComponentProps<{ name: string }> {

}

interface IDetailsState {
    name: string;
}

export default class Details extends React.Component<IDetailsProps, IDetailsState> {
    constructor(props: IDetailsProps) {
        super(props);

        this.state = { name: this.props.match.params.name }
        
    }

    updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <section>
                <h1>{this.state.name}</h1>
                <div className="form-group">
                    <label htmlFor="name">Update Name</label>
                    <input type="text" className="form-control" defaultValue={this.state.name}
                    onChange={this.updateName}/>
                </div>
            </section>
        );
    }
}