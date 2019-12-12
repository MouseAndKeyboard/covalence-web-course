const requestPromise = require('request-promise');
const fs = require('fs');
const path = require('path');

const endpoint = 'https://www.reddit.com/r/popular.json'
const redditDataFile = path.join(__dirname, './popular-articles.json');

requestPromise.get(endpoint, (err, resp, body) => {
    let obj = JSON.parse(body);

    

    let redditPosts = [];
    obj.data.children.forEach(element => {
        let postInfo = {
            title: element.data.title,
            url: element.data.url,
            author: element.data.author
        }

        redditPosts.push(postInfo);
    });

    let toWrite = JSON.stringify(redditPosts);

    fs.writeFileSync(redditDataFile, toWrite);
});