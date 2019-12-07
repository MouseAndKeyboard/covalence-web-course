document.addEventListener("DOMContentLoaded", () => {

    // default parameter values
    function favMovie(movie = "The Room", name = "world") {
        // using template literals 
        console.log(`my name is ${name} and my favorite movie is ${movie}`);
    }

    favMovie()
    favMovie("The Big Short", "Jeff Besos");
    
});