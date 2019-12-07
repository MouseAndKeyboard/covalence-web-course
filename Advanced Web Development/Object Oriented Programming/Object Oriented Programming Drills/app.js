document.addEventListener("DOMContentLoaded", () => {
    p1 = new Person("Jeff Besos", "New York", "50");
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

class Vehicle {
    constructor(manufacturer, wheels, type){ 
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.type = type
    }

    aboutVehicle() {
        console.log(`${type} made by ${manufacturer} with ${wheels} wheels.`);
    }
}

class Ute extends Vehicle {
    constructor(manufacturer, wheels, type, doors){
        super(manufacturer, wheels, type);
        this.doors = doors
        this.truckBed = true;
    }
}

class Sedan extends Vehicle {
    
}