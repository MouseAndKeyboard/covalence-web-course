/* tslint:disable */
import React from 'react';
import {injectStripe, ReactStripeElements} from 'react-stripe-elements';

import CardSection from './CardSection';

interface ICheckoutFormProps extends ReactStripeElements.InjectedStripeProps {
  client_secret: string
}

class CheckoutForm extends React.Component<ICheckoutFormProps> {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // See our confirmCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
    this.props.stripe.confirmCardPayment(this.props.client_secret, { 
      payment_method: {
        card: this.props.elements.getElement('card'),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
