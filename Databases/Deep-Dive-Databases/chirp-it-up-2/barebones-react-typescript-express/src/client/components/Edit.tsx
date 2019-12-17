import React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import $ from 'jquery';

interface IEditProps extends RouteComponentProps<{ id: string }> {
}

interface IEditState {
    text: string,
    author: string,
    success: number
}


class Edit extends React.Component<IEditProps, IEditState>  {
    constructor(props: IEditProps) {
        super(props);
        const { defaultMessage } = this.props.location.state;
        const { author } = this.props.location.state;
        this.state = {
            text: defaultMessage,
            author,
            success: 0
        }
    }

    updateMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const data = JSON.stringify(
            {
                author: this.state.author,
                message: this.state.text
            }
        )

        $.ajax(`/api/chirps/${this.props.match.params.id}`, { method: "PUT", data, contentType: "application/json; charset=utf-8" })
            .then((resp) => {
                this.setState({ success: 1 });
            })
            .catch(err => {
                this.setState({ success: -1 });
            })
    }

    render() {
        let btn: JSX.Element;
        switch (this.state.success) {
            case 0:
                btn = (<button className="btn btn-warning" onClick={this.props.history.goBack}>Go back</button>);
            case 1:
                btn = (<button className="btn btn-success" onClick={this.props.history.goBack}>Go back</button>);
            case -1:
                btn = (<button className="btn btn-danger" onClick={this.props.history.goBack}>Go back</button>);
            default:
                btn = (<button className="btn btn-warning" onClick={this.props.history.goBack}>Go back</button>);
        }

        return (
            <React.Fragment>
                <Header />
                <div className="container d-flex flex-column">
                    <div className="d-flex flex-column m-4">
                        <textarea

                            className="form-control lines-2"
                            placeholder="Message"
                            value={this.state.text}
                            onChange={(e) => this.setState({ text: e.target.value })}
                        />

                        <button
                            className="btn btn-info my-1"
                            onClick={this.updateMessage}
                        >Update</button>
                    </div>



                    {btn}
                </div>
            </React.Fragment>
        );
    }

}

export default Edit;