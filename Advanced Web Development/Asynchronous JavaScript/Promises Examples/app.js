document.addEventListener("DOMContentLoaded", () => {
    

    getWordOfTheDay()
    .then((word) => {
        console.log(`The word of the day is: ${word}`);
    }, (err) => {
        console.log(`Uh oh! There was an error: ${err}`);
    });
});