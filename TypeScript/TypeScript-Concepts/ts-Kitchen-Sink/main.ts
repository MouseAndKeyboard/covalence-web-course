// program entry point

// assignment of string
let name_ = "Jeff Besos"
// assignment of number
let USState_Count = 50
// addition
let sum = 5 + 4

function sayHello() {
    alert("Hello World!")
}

sayHello();

function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

const vegetables : Array<String> = ["carrot", "cucumber", "lettuce", "tomato"]
for (let vege in vegetables) {
    console.log(vege);
}

interface IPerson {
    "name": string,
    "age": number
} 

let persons : Array<IPerson> = [{
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

for (let i in persons) {
    checkAge(persons[i]["name"], persons[i]["age"])
}

function getLength(word: string) {
    let total_len : number = 0;

    for (let index = 0; index < word.length; index++) {
        total_len++
    }
    return total_len
}

let helloLength = getLength("Hello World")
if (helloLength % 2 == 0) {
    console.log("The world is nice and even");
} else {
    console.log("The world is an odd place!");  
}