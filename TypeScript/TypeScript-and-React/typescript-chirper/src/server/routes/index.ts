const express = require('express');
const chirpRouter = require('./chirps');

const apiRouter = express.Router();

apiRouter.use('/', (req, resp, next) => {
    next();
});

apiRouter.use('/chirps', chirpRouter);

module.exports = apiRouter;