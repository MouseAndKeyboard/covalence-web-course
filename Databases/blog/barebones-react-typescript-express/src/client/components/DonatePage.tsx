import { RouteComponentProps } from "react-router-dom";
import { StripeProvider, Elements } from 'react-stripe-elements';
import React from "react";
import CheckoutForm from "./CheckoutForm";

interface IDonatePageProps extends RouteComponentProps {

}

interface IDonatePageState {
}

export default class DonatePage extends React.Component<IDonatePageProps, IDonatePageState>  {

    constructor(params: Readonly<IDonatePageProps>) {
        super(params);
    }

    async submit(event: React.MouseEvent<HTMLButtonElement>) {
        // User clicked submit
    }


    render() {
        return (
            <StripeProvider apiKey="pk_test_giWqp3fHfxDJJ6zrxTV3BFtz00DFSbcK0X">
                <div className="example">
                    <h1>React Stripe Elements Example</h1>
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </div>
            </StripeProvider>
        );
    }
}