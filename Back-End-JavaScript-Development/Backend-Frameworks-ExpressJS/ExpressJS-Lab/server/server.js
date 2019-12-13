const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
 }))

app.post('/formsubmissions', (req, resp) => {
    const fName = req.body.firstname;
    const lName = req.body.surname;

    let obj = {firstName: fName, surname: lName}
    console.log(obj);
    // let s = JSON.stringify(obj);

    // fs.appendFileSync('./submissions.json', s);
});

// app.use('/', (req, rsp, next) => {
//     console.log(req.url);
//     next();
// });

app.use(express.static(path.join(__dirname, '../public/')));

app.listen(3000);