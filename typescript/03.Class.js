// ES6 (2015) introduced classes as syntactic sugar over JavaScript's existing prototype-based inheritance.
class Person {
    static #species = "Homo Sapiens";
    static getSpecies() {
        return this.#species;
    }
    name;
    _age;
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    set age(age) {
        if (age < 0) {
            console.log("Age cannot be negative.");
        }
        else {
            this._age = age;
        }
    }
    get age() {
        return this._age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this._age} years old.`);
    }
}
const user1 = new Person("Alice", 30);
user1.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(user1.age); // 30
user1.age = 35;
class Employee extends Person {
    position;
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }
    greet() {
        super.greet(); // Call the parent class greet method
        console.log(`I work as a ${this.position}.`);
    }
}
const employee1 = new Employee("Bob", 40, "Software Engineer");
employee1.greet();
// Hello, my name is Bob and I am 40 years old.
// I work as a Software Engineer.
