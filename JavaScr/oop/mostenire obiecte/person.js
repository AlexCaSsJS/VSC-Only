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

class Teacher extends Person {
    constructor(name, age, height, speciality){
        super(name,age,height);
        this.speciality = speciality;
    }
    sayHello() {
        super.sayHello();
        console.log(`I'm a teacher and i teach ${this.speciality}`);
    }
}

var alex = new Person ("Alex", 30, 180);
var andreea = new Student("Andreea", 26, 168, "JavaScript");
var chuckNorris = new Teacher("Chuck Norris", 40, 175, "VueJS")

alex.sayHello();
andreea.sayHello();
chuckNorris.sayHello();