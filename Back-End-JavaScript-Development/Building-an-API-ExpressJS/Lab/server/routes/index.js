const express = require('express');
const chirpRouter = require('./chirps');

const apiRouter = express.Router();

apiRouter.use('/chirps', chirpRouter);

module.exports = apiRouter;