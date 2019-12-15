import React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from  'react-router-dom';

interface IEditProps extends RouteComponentProps {
    defaultMessage: string
}

interface IEditState {

}


class Edit extends React.Component<IEditProps, IEditState>  {
    constructor(props: IEditProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container d-flex flex-column">
                    <div className="d-flex flex-column m-4">
                        <textarea

                            className="form-control lines-2"
                            placeholder="Message"
                            value={this.props.defaultMessage}
                        />

                        <button
                            className="btn btn-info my-1"
                        >Update</button>
                    </div>

                    

                    <button className="btn btn-warning" onClick={this.props.history.goBack}>Go back</button>

                </div>
            </React.Fragment>
        );
    }

}

export default Edit;