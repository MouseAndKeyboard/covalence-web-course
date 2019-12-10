import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'; 
import Home from './Home'
import FilmsPage from './FilmsPage';
import PeoplePage from './PeoplePage';
import SpecificFilmPage from './SpecificFilmPage';
import SpecficPersonPage from './SpecificPersonPage';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                        <li className="navbar-brand">Studio Ghibli</li>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/films/" className="nav-link">Films</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/people/" className="nav-link">People</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </nav>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/films/" component={FilmsPage} />
                    <Route path="/films/:id" component={SpecificFilmPage} />
                    <Route exact path="/people/" component={PeoplePage} />
                    <Route path="/people/:id" component={SpecficPersonPage} />
                </Fragment>
            </Router>
        );
    }
}

export default App;