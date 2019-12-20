import React from "react";
import { RouteProps, RouteComponentProps } from "react-router-dom";
import { Elements } from "react-stripe-elements";
import CheckoutForm from './CheckoutForm';

class PaymentPage extends React.Component<IPaymentPageProps, IPaymentPageState> {
    constructor(props: IPaymentPageProps) {
        super(props);

        this.state = {
            client_secret: null
        }
    }

    makePurchaseIntent = async () => {

        // create intent

        try {
            let response = await fetch('/api/payments/intent');
            let { client_secret } = await response.json();
            this.setState({ client_secret });
        } catch (error) {
            console.log(error);
        }

    }

    componentDidMount() {
        this.makePurchaseIntent();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="d-flex justify-content-start flex-column align-items-center border shadow m-3 p-3">
                        <div>

                            <h1>Purchase</h1>
                            <h5>{this.state.client_secret}</h5>
                        </div>




                        <div>

                            <span
                                className="btn btn-warning"
                                onClick={this.props.history.goBack}>Go back
                        </span>
                        </div>
                    </div>


                </div>
                <Elements>
                    <CheckoutForm client_secret={this.state.client_secret} />
                    <button> Pay </button>
                </Elements>
            </React.Fragment>

        )
    }
}

export interface IPaymentPageProps extends RouteComponentProps { }

export interface IPaymentPageState {
    client_secret: string
}

export default PaymentPage;
