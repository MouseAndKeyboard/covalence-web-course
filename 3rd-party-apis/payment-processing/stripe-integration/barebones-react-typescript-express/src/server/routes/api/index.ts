import * as express from 'express';
import PaymentsRouter from './payments';

let APIRouter = express();

APIRouter.use('/payments', PaymentsRouter);

export default APIRouter;