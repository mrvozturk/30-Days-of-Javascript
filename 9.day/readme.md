<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">
   
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small> May, 2023</small>
</sub>
</div>

[<< Day 2](../readMe.md) | [Day 3 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript in 30 days</title>
    <!--<style>
        div {
            margin-top: 1000px;
            margin-left: 2000px;
        }
    </style>-->
</head>

<body>
    <h3 id="h3">Global scope</h3>
    <script src="index.js"></script>
</body>

</html>
```
##  - What is esmascript?

-ECMAScript (ES) is the standardized specification for JavaScript, introducing new features and improvements with each version. ES6 (ECMAScript 2015) brought significant updates, and subsequent versions continued to enhance the language. ES modules (ESM) enable modular code organization and sharing. In short, ES is the JavaScript standard, evolving the language for more efficient and modern coding.

#### ES6-Classes


```js
class Employee {
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

emp.showInfos();
```

#### ES6 Static Methods


```js
class Maths {
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

math.sqrt(4);
```

#### ES6 Inheritance



```js
class Person { // Superclass,BaseClass
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
emp.toString();
```