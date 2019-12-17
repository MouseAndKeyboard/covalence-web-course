import * as express from 'express';
import chirpRouter from './chirps';

const apiRouter = express.Router();
apiRouter.use(express.json());

apiRouter.use('/chirps', chirpRouter);

export default apiRouter;