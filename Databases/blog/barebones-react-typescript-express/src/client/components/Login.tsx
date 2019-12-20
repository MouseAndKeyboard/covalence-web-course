import React from "react";


interface ILoginState {
}

interface ILoginProps {

}


export default class Login extends React.Component<ILoginProps, ILoginState>  {

    constructor(params: Readonly<ILoginProps>) {
        super(params);
    }

    submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        
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
                                    <input type="email" className="form-control" name="email" id="email" />
                                </div>
                                <div className="form-group">
                                    {/* password */}
                                    <label htmlFor="content">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" />
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
