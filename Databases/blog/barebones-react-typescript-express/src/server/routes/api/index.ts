import * as express from 'express';
import * as passport from 'passport';

import blogRouter from './blog';
import tagRouter from './tags';
import paymentRouter from './payment';

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
    passport.authenticate('bearer', {session: false}, (err, user, info) => {
        
        if (user) {
            req.user = user;
        }
        return next();
    })(req, res, next);
});

apiRouter.use('/blog', blogRouter);
apiRouter.use('/tags', tagRouter);
apiRouter.use('/pay', paymentRouter)
export default apiRouter;