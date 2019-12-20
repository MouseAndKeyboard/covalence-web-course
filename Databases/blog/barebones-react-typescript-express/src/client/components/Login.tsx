import React from "react";
import { json, SetAccessToken } from '../utils/api'
import { RouteComponentProps } from 'react-router-dom';


interface ILoginProps extends RouteComponentProps{

}

interface ILoginState {
    email: string,
    password: string
}

export default class Login extends React.Component<ILoginProps, ILoginState>  {

    constructor(params: Readonly<ILoginProps>) {
        super(params);

        this.state = {
            email: "",
            password: ""
        }
    }

    submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            let result = await json('/auth/login', "POST", {
                email: this.state.email,
                password: this.state.password
            });

            if (result){
                SetAccessToken(result.token, {userid: result.userid, role: result.role});
                if (result.role === 'admin') {
                    this.props.history.push('/new');
                } else {
                    this.props.history.push('/');
                }
            } else {
                // checking a login status
            }

        } catch (error) {
            throw error;
        }

    }

    updateEmail = (event: any) => {
        let val = event.target.value;
        this.setState({
            email: val
        });
    }

    updatePassword = (event: any) => {
        let val = event.target.value;
        this.setState({
            password: val
        });
    } 

    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="card my-4 shadow">
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                    {/* email */}
                                    <label htmlFor="title">Email</label>
                                    <input type="email" className="form-control" name="email" id="email"
                                    onChange={this.updateEmail} value={this.state.email} />
                                </div>
                                <div className="form-group">
                                    {/* password */}
                                    <label htmlFor="content">Password</label>
                                    <input type="password" className="form-control" name="password" id="password"
                                    onChange={this.updatePassword} value={this.state.password} />
                                </div>
                                <button className="btn btn-primary" onClick={this.submit}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
