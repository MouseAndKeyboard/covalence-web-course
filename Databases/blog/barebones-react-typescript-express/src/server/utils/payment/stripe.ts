import stripeLoader from 'stripe'; 
import cfg from '../../config/'
//define secret key in ENV_VAR

const stripe = new stripeLoader(cfg.stripe.secretKey); 

function charge(token: string, amt: number) { 
    return stripe.charges.create({ 
        amount: amt * 100, //convert amount from cents to dollars
        currency: 'usd',
        source: token, 
        description: 'Statement description' });
}; 

export { charge };
