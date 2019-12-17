import * as express from 'express';
import chirpsRouter from './chirps';
import userRouter from './users';

const apiRouter = express.Router();
apiRouter.use(express.json());

apiRouter.use('/chirps', chirpsRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;