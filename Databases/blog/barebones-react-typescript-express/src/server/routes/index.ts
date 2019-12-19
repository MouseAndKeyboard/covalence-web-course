import * as express from 'express';

import blogRouter from './blog';
import tagRouter from './tags';

const apiRouter = express.Router();
apiRouter.use(express.json());

apiRouter.use('/blog', blogRouter);
apiRouter.use('/tags', tagRouter);
export default apiRouter;