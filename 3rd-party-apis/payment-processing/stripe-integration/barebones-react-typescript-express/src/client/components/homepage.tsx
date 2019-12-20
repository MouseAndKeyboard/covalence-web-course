import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component<IHomepageProps, IHomepageState> {
    constructor(props: IHomepageProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-start flex-column align-items-center border shadow m-3 p-3">
                    <div>

                        <h1>Homepage</h1>
                    </div>
                    <div>

                        <Link to="/purchase"> <span className="btn btn-success">Buy now!</span> </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export interface IHomepageProps { }

export interface IHomepageState {
}

export default Homepage;
