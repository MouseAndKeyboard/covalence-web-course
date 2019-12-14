const express = require('express');
const chirpRouter = require('./chirps');

const apiRouter = express.Router();

apiRouter.use('/', (req: any, resp: any, next: () => void) => {
    next();
});

apiRouter.use('/chirps', chirpRouter);

module.exports = apiRouter;