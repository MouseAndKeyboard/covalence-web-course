const express = require('express');
const apiRouter = require('./routes');
const path = require('path')

let app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../client/')));

app.listen('4000');