import * as React from 'react';
import List from './List';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Details from './Details';

const App: React.SFC<IAppProps> = props => {

	const [name, setName] = useState<string>('')

	const getName = async () => {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			setName(name);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getName();
	}, [])

	return (
		<main className="container my-5">
			<h1>Hello {name}</h1>
			<Router>
				<Switch>

					<Route exact path="/" component={List} />
					<Route path="/:name" component={Details} />
				</Switch>
			</Router>

		</main>
	);
}

export interface IAppProps { }

export default App;
