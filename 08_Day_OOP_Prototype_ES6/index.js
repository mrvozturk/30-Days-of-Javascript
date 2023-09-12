//!SECTION Constructors and Object Creation

/*const emp1 = { // Object Literal
    name: "John",
    age: 40,
    showInfos: function () { console.log("information is displayed") }
}

const emp2 = {
    name: "Jane",
    age: 35,
}

console.log(emp1);*/

// Consructor

/*function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

const emp1 = new Employee("John", 35, 4000);

const emp2 = new Employee("Jane", 40, 5000);

console.log(emp1);*/

//SECTION - Prototype 1

/*function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("İnformation is displayed...");
    }
    this.toString = function () {
        console.log("this is an employee object...");
    }
}
const emp1 = new Employee("John", 35);

console.log(emp1);

console.log(emp1.toString());*/

//!SECTION Prototype 2

/*function Employee(name, age) {
    this.name = name;
    this.age = age;
    Employee.prototype.showInfos = function () {
        console.log("Name" + this.name + "age" + this.age);
    }
}

const emp1 = new Employee("John", 35);
const emp2 = new Employee("Jane", 40);

emp2.showInfos();
console.log(emp1);
console.log(emp2);*/

//SECTION - Object Create Method

/*const obj = {
    a1: function () {
        console.log(" a 1");
    },
    a2: function () {
        console.log("a 2")
    },
}
console.log(obj)*/

/*const obj = {
    a1: function () {
        console.log(" a 1");
    },
    a2: function () {
        console.log("a 2")
    },
}
const emp = Object.create(obj);
emp.name = "john";
emp.age = 25;
console.log(emp);*/

/*function Person() {

}
Person.prototype.a1 = function () {
    console.log("a 1");
}
Person.prototype.a2 = function () {
    console.log("a 2");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.mya = function () {
    console.log("mya")
}
const emp = new Employee("john", 35);

console.log(emp)*/

//!SECTION Function Prototype Call,Apply,Bind Functions

//!SECTION Call,Apply,Bind

//Call: It is used to invoke a function with a specific context (this value) and arguments passed individually, separated by commas.

/*const obj1 = {
    number1: 10,
    number2: 20,
};

const obj2 = {
    number1: 30,
    number2: 40,
};

function addNumbers(number3, number4) {
    console.log(this.number1 + this.number2 + number3 + number4)
}
addNumbers.call(obj1, 100, 200);
addNumbers.call(obj2, 100, 200);*/

//Apply: It is used to invoke a function with a specific context (this value) and arguments passed as an array.

/*const obj1 = {
    number1: 10,
    number2: 20,
};

const obj2 = {
    number1: 30,
    number2: 40,
};

function addNumbers(number3, number4) {
    console.log(this.number1 + this.number2 + number3 + number4)
}

addNumbers.apply(obj1, [100, 200]);

addNumbers.apply(obj2,[100, 200])*/

//Bind: It is used to create a new function with a changed context (this value) for the original function. The bind method returns a new function that can be invoked later with the specified context.

/*const obj1 = {
    number1: 10,
    number2: 20,
};

const obj2 = {
    number1: 30,
    number2: 40,
};

function addNumbers(number3, number4) {
    console.log(this.number1 + this.number2 + number3 + number4)
}

function getNumbersTotal(number3, number4) {
    return this.number1 + this.number2 + number3 + number4
}

const copyFunc1 = getNumbersTotal.bind(obj1);

const copyFunc2 = getNumbersTotal.bind(obj2);

console.log(copyFunc1(100, 200));

console.log(copyFunc2(100, 200))*/

//SECTION - Prototype-based inheritance

// İnheritance 


/*function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("Name: " + this.name + "Age:" + this.age)

}

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {

}
// Overriding
Employee.prototype.showInfos = function () {
    console.log("name:" + this.name + "age:" + this.age + "salary:" + this.salary)
}
const emp = new Employee("John", 35, 4000);

emp.showInfos();
emp.toString();
console.log(emp)*/

