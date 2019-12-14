import * as React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Home from './components/Home';
import Edit from './components/Edit';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Route path="/" component={Home} />
				<Route path="/:id/edit" component={Edit} />
			</BrowserRouter>
			
			
		);
	}
}

export interface IAppProps {}

export interface IAppState {

}

export default App;
