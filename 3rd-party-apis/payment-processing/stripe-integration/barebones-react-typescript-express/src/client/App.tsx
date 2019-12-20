import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import PaymentPage from './components/payment-page';
import { StripeProvider } from 'react-stripe-elements';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
	}

	render() {
		return (
			<StripeProvider apiKey="pk_test_giWqp3fHfxDJJ6zrxTV3BFtz00DFSbcK0X" >
				<BrowserRouter>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/purchase' component={PaymentPage} />
				</BrowserRouter>
			</StripeProvider>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
}

export default App;
