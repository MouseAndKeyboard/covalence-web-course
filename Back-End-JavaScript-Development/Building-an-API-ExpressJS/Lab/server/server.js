const express = require('express');
const apiRouter = require('./routes');
const path = require('path')
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser());
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../client/')));

app.listen('4000');