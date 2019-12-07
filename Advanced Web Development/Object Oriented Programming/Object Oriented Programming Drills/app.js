document.addEventListener("DOMContentLoaded", () => {
    
});

class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }

    aboutMe(){
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}`);
    }
}