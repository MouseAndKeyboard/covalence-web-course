const path = require('path');
const fs = require('fs');
const request = require('request');

const dataPath = path.join(__dirname, '../data.json');

request('https://ghibliapi.herokuapp.com/films/', (err, res, body) => {
    if (err){
        console.log(err);
    }

    let obj = JSON.parse(body);  

    obj.forEach(item => {

        console.log(item.title);
    });

    fs.writeFile(dataPath, body, err => {
        if (err) {
            console.log(err);
        }
    });
    
});

// fs.readFile(dataPath, {
//     encoding: "UTF-8"
// }, (err, data) => {
//     let person = JSON.parse(data);

//     console.log(person.name);
//     console.log(person.age);
    
// });
