const stripe = require('stripe')(cfg.stripe.secretKey);
import cfg from '../../config/'
//define secret key in ENV_VAR

export default async function blogPayment() {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'aud',
    });

    let cs = paymentIntent.client_secret
}

function charge(token: string, amt: number) {
    console.log(stripe);
    console.log(token);
    return stripe.charges.create({
        amount: amt * 100, //convert amount from cents to dollars
        currency: 'usd',
        source: token,
        description: 'Statement description'
    });
};

export { charge };
