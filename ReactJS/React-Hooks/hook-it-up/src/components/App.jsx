import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import UserDetails from './UserDetails';

const App = (props) => {
    // const [state, setState] = useState(defaultState);

    // useEffect(() => {

    // }, [dependencies]);

    return (
        <Router>
            <React.Fragment>
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                    <li className="navbar-brand">Website</li>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/:id/details" component={UserDetails} />
        </Router>
    );
}

export default App;