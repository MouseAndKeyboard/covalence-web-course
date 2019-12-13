// assignment of string
let name = "Jeff Besos"
// assignment of number
let USState_Count = 50
// addition
let sum = 5 + 4

function sayHello() {
    alert("Hello World!")
}

sayHello()

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

vegetables = ["carrot", "cucumber", "lettuce", "tomato"]
for (vege in vegetables) {
    console.log(vege);
}

persons = [{
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
]

for (i in persons) {
    checkAge(persons[i]["name"], persons[i]["age"])
}

function getLength(word) {
    total_len = 0
    for (character in word){
        total_len++
    }
    return total_len
}

let length = getLength("Hello World")
if (length % 2 == 0) {
    console.log("The world is nice and even");
} else {
    console.log("The world is an odd place!");  
}