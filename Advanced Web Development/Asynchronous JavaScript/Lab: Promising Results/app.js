// import * as slowmath from "async-math.js"


async function doMath() {
    try {
        let result = await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    doMath();

    // slowMath.add(1, 1)
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.multiply(result, 2);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.divide(result, 4)
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.subtract(result, 3);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.add(result, 98);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.remainder(result, 2);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.multiply(result, 50);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.remainder(result, 40);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         return slowMath.add(result, 32);
    //     })
    //     .then(result => {
    //         console.log(`The final result is: ${result}`);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

});