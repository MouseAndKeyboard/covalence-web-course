import * as express from 'express';
import cfg from '../../cfg/development';

const stripe = require('stripe')(cfg.STRIPE_SECRET_KEY);


const CalculateCost = (order: {}) => {
    
    return 5000 // $50
}


let PaymentsRouter = express();

PaymentsRouter.get('/intent', async (req, resp, next) => {
    try {
        
        const PaymentIntent = await stripe.paymentIntents.create({
            amount: CalculateCost(req.body),
            currency: 'usd'
        });
    
        resp.status(200).json({client_secret: PaymentIntent.client_secret});
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
    
});

export default PaymentsRouter;