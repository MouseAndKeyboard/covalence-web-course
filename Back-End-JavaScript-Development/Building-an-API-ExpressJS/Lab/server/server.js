const express = require('express');
const apiRouter = require('./routes');

let app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.listen(4000);