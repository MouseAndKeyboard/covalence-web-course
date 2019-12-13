// program entry point
// assignment of string
var name_ = "Jeff Besos";
// assignment of number
var USState_Count = 50;
// addition
var sum = 5 + 4;
function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var vegetables = ["carrot", "cucumber", "lettuce", "tomato"];
for (var vege in vegetables) {
    console.log(vege);
}
var persons = [{
        "name": "jeff",
        "age": 18
    },
    {
        "name": "chris",
        "age": 24
    },
    {
        "name": "alex",
        "age": 13
    },
    {
        "name": "jill",
        "age": 21
    },
    {
        "name": "roger",
        "age": 22
    },
];
for (var i in persons) {
    checkAge(persons[i]["name"], persons[i]["age"]);
}
function getLength(word) {
    var total_len = 0;
    for (var index = 0; index < word.length; index++) {
        total_len++;
    }
    return total_len;
}
var helloLength = getLength("Hello World");
if (helloLength % 2 == 0) {
    console.log("The world is nice and even");
}
else {
    console.log("The world is an odd place!");
}
