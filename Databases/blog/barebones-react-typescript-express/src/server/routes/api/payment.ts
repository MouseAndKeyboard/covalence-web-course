import * as express from 'express'
import db from '../../db';
import { charge } from '../../utils/payment/stripe';
let paymentRouter = express.Router();

paymentRouter.post('/', async (req, resp, next) => {
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);

    try {
        let { status } = await charge(req.body, 20.00);
        
        resp.json({ status });
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }


});

export default paymentRouter;