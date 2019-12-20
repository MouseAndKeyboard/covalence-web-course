import React from "react";
import { injectStripe, ReactStripeElements, CardElement } from 'react-stripe-elements';

interface ICheckoutFormProps extends ReactStripeElements.InjectedStripeProps {

}

interface ICheckoutFormState {
    complete: boolean
}

class CheckoutForm extends React.Component<null,ICheckoutFormState> {

    constructor(props: any) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            complete: false
        }
    }

    async submit(ev : React.MouseEvent<HTMLButtonElement>) {

        try {
            let x : any = this.props;
            let {token} = await x.stripe.createToken({name: "Name"});
            let response = await fetch('/api/pay', {
                method: 'POST',
                headers: {"Content-Type": "text/plain"},
                body: token.id
            });

            if (response.ok){
                console.log("Purchase complete");
                this.setState({complete: true});
            }

        } catch (error) {
            console.log(error);
            
        }
        

        // User clicked submit
    }

    render() {
        if (this.state.complete) {
            return (
                <h1>Purchase complete</h1>
            );
        }

        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Purchase</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);
