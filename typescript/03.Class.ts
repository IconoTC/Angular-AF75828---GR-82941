// ES6 (2015) introduced classes as syntactic sugar over JavaScript's existing prototype-based inheritance.

interface IPerson {
  name: string;
  job: string;
  greet(): void;
}

type TypePerson = {
  name: string;
  job: string;
  greet(): void;
}


// class Person implements TypePerson {
class Person implements IPerson {
  static #species = "Homo Sapiens";

  static getSpecies() {
    return this.#species;
  }

  // public name: string;
  // private _age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this._age = age;
  // }



  // Propiedades de parámetros

  //public name: string;
  //private _age: number;
  constructor(public name: string, private _age: number,  public job: string) {
    //this.name = name;
    //this._age = _age;
  }

  set age(age) {
    if (age < 0) {
      console.log("Age cannot be negative.");
    } else {
      this._age = age;
    }
  }

  get age() {
    return this._age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this._age} years old.`
    );
  }

}

const user1 = new Person("Alice", 30, "Engineer");
user1.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(user1.age); // 30
user1.age = 35;

class Employee extends Person {
  position: string;
  constructor(name: string, age: number, job: string, position: string) {
    super(name, age, job); // Call the parent class constructor
    this.position = position;
  }

  override greet() {
    super.greet(); // Call the parent class greet method
    console.log(`I work as a ${this.position}.`);
  }
}

const employee1 = new Employee("Bob", 40, "Software Engineer", "CTO");
employee1.greet();
// Hello, my name is Bob and I am 40 years old.
// I work as a Software Engineer.

