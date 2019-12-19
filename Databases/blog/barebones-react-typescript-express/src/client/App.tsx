import * as React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Homepage from './components/Homepage';
import Blogpage from './components/Blogpage';
import CreatePage from './components/CreatePage';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);

	}



	render() {
		return (
			<Router>

				<nav className="navbar navbar-light navbar-expand-lg">
					<span className="navbar-brand">Really Bad Blog</span>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/new">Create Blogpost</Link>

							</li>
						</ul>
						<span className="navbar-text">
							Admin
					</span>
					</div>
				</nav>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/new/" component={CreatePage}/>
				<Route exact path="/blogs/:id" component={Blogpage} />
			</Router>

		);
	}
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
