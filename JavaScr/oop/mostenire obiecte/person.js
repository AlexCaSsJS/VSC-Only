class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello , my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, age, height, course) {
        // apelam constructorul parintelui
        super(name, age, height);
        // adaugam proprietatile in plus
        this.course = course;
    }
    // suprascrierea metodelor:
    sayHello() {
        console.log(`Hello , my name is ${this.name} and i like ${this.course}`);
    }
}

var alex = new Person ("Alex", 30, 180);
var andreea = new Student("Andreea", 26, 168, "JavaScript");

alex.sayHello();
andreea.sayHello();