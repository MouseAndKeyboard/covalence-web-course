
// hoisting 
// // name = 'Jeff Besos'
// var name;
// // let name;
// console.log(name);


// setName();
// function setName(){
//     var name = 'Jeff Besos'
//     console.log(name);
    
// }


console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;
}
