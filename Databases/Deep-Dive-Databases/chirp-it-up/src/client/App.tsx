import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Edit from './components/Edit';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Route path="/edit/:id" component={Edit} />
				<Route exact path="/" component={Home} />
			</BrowserRouter>
		);
	}
}

export interface IAppProps { }

export interface IAppState {

}

export default App;
