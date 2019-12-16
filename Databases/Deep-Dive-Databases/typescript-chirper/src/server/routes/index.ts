import * as express from 'express';
import chirpRouter from './chirps';

const apiRouter = express.Router();
apiRouter.use(express.json());
// apiRouter.use('/', (req: any, resp: any, next: () => void) => {
//     next();
// });

apiRouter.use('/chirps', chirpRouter);

export default apiRouter;