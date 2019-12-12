const requestPromise = require('request-promise');
const fs = require('fs');
const path = require('path');

const redditMediaFolder = path.join(__dirname, './downloads/');
const endpoint = 'https://www.reddit.com/r/popular.json';

requestPromise.get(endpoint, (err, resp, body) => {
    let obj = JSON.parse(body);


    let redditPosts = [];
    obj.data.children.forEach(element => {
        element.data.thumbnail

        redditPosts.push(postInfo);
    });

    let toWrite = JSON.stringify(redditPosts);

    fs.writeFileSync(redditDataFile, toWrite);
});