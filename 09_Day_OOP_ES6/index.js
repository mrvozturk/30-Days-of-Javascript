//SECTION - What is esmascript?
//ECMAScript (ES) is the standardized specification for JavaScript, introducing new features and improvements with each version. ES6 (ECMAScript 2015) brought significant updates, and subsequent versions continued to enhance the language. ES modules (ESM) enable modular code organization and sharing. In short, ES is the JavaScript standard, evolving the language for more efficient and modern coding.

//SECTION - ES6-Classes

// Syntactic Sugar
/*class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos() {
        console.log("name:" + this.name + "age:" + this.age + "salary:" + this.salary)
    }
}

const emp = new Employee("John", 35, 4000);

//console.log(emp);

emp.showInfos();*/

//SECTION - ES6 Static Methods

/*class Maths {
    sqrt(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}
const math = new Maths()
Maths.cube(3);
console.log(math);

math.sqrt(4);*/

//SECTION - ES6 Inheritance

/*class Person { // Superclass,BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("name:" + this.name + "age:" + this.age + "salary:" + this.salary)

    }
}
class Employee extends Person { // DerivedClass,SubClass,ChildClass
    constructor(name, age, salary) {
        //this.name = name;
        //this.age = age;
        super(name, age);
        this.salary = salary;
    }
    showInfos() { // Overriding
        console.log(" name: " + this.name + " age: " + this.age + " salary: " + this.salary)

    }
    toString() { // Overriding
        console.log("Employee");
    }
    raiseSalary(amount) { // Extra
        this.salary += amount;
    }
}

const emp = new Employee("John", 25, 4000);
emp.raiseSalary(500);
emp.showInfos();
emp.toString();*/