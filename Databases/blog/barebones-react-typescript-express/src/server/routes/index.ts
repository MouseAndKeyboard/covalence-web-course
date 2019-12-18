import * as express from 'express';

import blogRouter from './blog';

const apiRouter = express.Router();
apiRouter.use(express.json());

apiRouter.use('/blog', blogRouter);

export default apiRouter;