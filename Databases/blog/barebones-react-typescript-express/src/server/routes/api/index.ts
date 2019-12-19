import * as express from 'express';

import blogRouter from './blog';
import tagRouter from './tags';
import passport = require('passport');


const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
    passport.authenticate('bearer', {session: false}, (err, user, info) => {
        if (user) {
            req.user = user;
        }
        return next();
    });
});

apiRouter.use('/blog', blogRouter);
apiRouter.use('/tags', tagRouter);
export default apiRouter;