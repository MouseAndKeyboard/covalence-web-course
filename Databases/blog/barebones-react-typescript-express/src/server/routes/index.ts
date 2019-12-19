import * as express from 'express';
import apiRouter from './api/';
import authRouter from './auth/';

const router = express();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;