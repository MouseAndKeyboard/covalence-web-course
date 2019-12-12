let path = require('path');
let fs = require('fs');

let dataPath = path.join(__dirname, '../data.json');

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    let person = JSON.parse(data);

    console.log(person.name);
    console.log(person.age);
    
});
