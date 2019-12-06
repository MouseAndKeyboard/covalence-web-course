let fruits = ["apple", "pear", "mango"]
let favFruit;


sayHello();
function sayHello(){
    alert('hello')
}


let sayGoodbye = function() {
    alert('goodbye')
}

sayGoodbye();








function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        let leastFave = fruits[0]
    }
    console.log(leastFave);
}

printFruits();
printFavFruit();
