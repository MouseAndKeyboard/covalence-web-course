const path = require('path');
const express = require('express');

let app = express();

// app.use(express.static(path.join(__dirname, '../client/')) );

// app.use('/', (req, rsp, next) => {
//     console.log(req.url);
//     next();
// });

app.get('/', (req, rsp) => {
    rsp.send('Hello from the web server side...')
})

app.listen(3000);