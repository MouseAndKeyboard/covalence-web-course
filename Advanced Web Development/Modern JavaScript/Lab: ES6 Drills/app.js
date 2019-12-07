document.addEventListener("DOMContentLoaded", () => {

    // default parameter values
    let favMovie = (movie = "The Room", name = "world") => {
        // using template literals 
        console.log(`my name is ${name} and my favorite movie is ${movie}`);
    }

    favMovie()
    favMovie("The Big Short", "Jeff Besos");

    let getFirstName = (FullName) => {
        return FullName.split(',')[0];
    }

    let getFirstNameConcise = FullName => FullName.split(',')[0];

    Fullname = "Jeff,Besos"
    f1 = getFirstName(Fullname);
    f2 = getFirstNameConcise(Fullname);

    console.log(f1, f2);

    let statCalc = (x, y) => 
        ({
            exponent: x ** y,
            product: x * y
        });
    

    let {exponent, product} = statCalc(5, 2);
    console.log(`Exponent is: ${exponent}. Product is: ${product}`);
   
    
    function spread(name, location, favFood) {
        console.log(name, location, favFood);
        
    }

    let arr = ["Jeff", "USA", "Tacos"];
    spread(...arr)

    function toCharArray(string) {
        return [...string];
    }

    console.log(toCharArray("testing 123"))

});