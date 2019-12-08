document.addEventListener("DOMContentLoaded", () => {
    

    getWordOfTheDay()
    .then(word => {
        console.log(`The word of the day is: ${word}`);
    }, err => {
        console.log(`Uh oh! There was an error: ${err}`);
    });

    // Promise pyramid of doom
    getWordOfTheDay()
    .then((word) => {
        console.log(`The word of the day is: ${word}`);
        console.log(`Sending to friend`);
        tellFriend(word)
        .then(response => {
            console.log(`Friend responded: ${response}`);
            
        }, err => {
            console.log(err);
        })        
    }, err => {
        console.log(err);
    })

});