import * as express from 'express';
import APIRouter from './api';

let router = express();

router.use('/api', APIRouter);

export default router;