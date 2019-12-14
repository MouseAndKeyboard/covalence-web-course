import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid p-0 m-0">

            <div className="container">
                <Link to="/">
                    <img src="banner.png" width="25%" height="25%" alt="Chirper" />
                </Link>

            </div>
        </div>
    );
}

export default Header