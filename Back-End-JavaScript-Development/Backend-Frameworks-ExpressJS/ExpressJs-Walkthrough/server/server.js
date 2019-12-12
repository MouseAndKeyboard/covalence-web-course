const express = require('express');
const path = require('path');
const fs = require('fs')
let app = express();



app.use((req, res, next) => {
    // console.log(req.originalUrl);
    fs.appendFileSync('log.txt', `${req.url}\n`);
    next();
});

app.use(express.static(path.join(__dirname, '../public/')))

// app.get('/order/:name', (req, res) => {
//     let name = req.params.name;
//     let email = req.query.email;
//     res.send(`Your name is: ${name} and email is ${email}`);
// })

app.listen(3000);