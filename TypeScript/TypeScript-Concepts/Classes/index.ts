abstract class MyClass {

    constructor(public name : string){
        // this.name = name; Don't need this, it's automatically set.
    }

    private getName(){
        return this.name;
    }

    public myMethod(){
        console.log(this.getName());
        
    }

}

class newClass extends MyClass {

}

let mc = new newClass('Jeff');
mc.myMethod();

console.log(mc.myMethod());


let p : IPerson = {name: 'Jeff', age: 99}

let arr : Array<IPerson> = [];

interface IPerson {
    age: number;
    name: string;
}