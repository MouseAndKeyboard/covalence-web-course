import * as React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="container">
					
				</div>
			</React.Fragment>
			
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;
