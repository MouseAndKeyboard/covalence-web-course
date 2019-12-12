const path = require('path');
const fs = require('fs');

const chirpsPath = path.join(__dirname, '../chirps.json');

const chirps = [{
        author: "Jeff Besos",
        msg: "Hello world!"
    },
    {
        author: "Steve Jabbs",
        msg: "Don't you hello me :("
    },
    {
        author: "Elon Mosk",
        msg: "Vroom vroom"
    },
    {
        author: "Bill Gaits",
        msg: "I have a very good stride"
    },
    {
        author: "Sam Smoth",
        msg: "Sing song"
    },
]

const chirpsJSON = JSON.stringify(chirps);

fs.writeFile(chirpsPath, chirpsJSON, {}, (err) => {if(err) console.log(err);});

