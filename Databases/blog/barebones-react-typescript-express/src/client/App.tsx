import * as React from 'react';

import Homepage from './components/Homepage';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);

	}



	render() {
		return (
			<main className="container my-5">
				<Homepage />
			</main>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
