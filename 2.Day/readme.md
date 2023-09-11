<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>


<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small> May, 2023</small>
</sub>
</div>

[<< Day 2](../readMe.md) | [Day 3 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)



```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript in 30 days</title>
  </head>
  <body>
        <h3 id="h3">In JavaScript, the concept of an object and creating objects </h3>
 <script src="index.js"></script>
  </body>
</html>
```
#### JavaScript Fundamentals Include Conditions-Loops and Functions


## Conditions

#### Equality (==)

The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

```js
console.log(2 == 2); // true

console.log("js" == "java"); //false

console.log(2 == "2"); // true

```

#### Strict equality (===)

The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

```js
// Type checking
console.log(2 === "2");

console.log(1 === 1);
// Expected output: true

console.log('hello' === 'hello');
// Expected output: true

console.log('1' ===  1);
// Expected output: false

```
#### Greater than (>)

The greater than (>) operator returns true if the left operand is greater than the right operand and false otherwise

```js
console.log(4 > 2); // true

console.log(2 > 4); //false

```
#### Inequality (!=)

The inequality(!=) operator checks whether its two operands are not equal,returning a Boolean result. Unlike the strict inequality operator ,it attempts to convert and compare operands that are of different types

```js
//Is it not equel
console.log(2 != 4); //true

console.log(2 != 2); // false

console.log('hello'!='hello'); // false

console.log('1'!= 1); // false


```

#### Less than (<)

The less than (<) operator returns true if the left operand is less than the right operand, and false otherwise 

```js
console.log(2 < 4); //true
```

#### Less than or equal (<=)

The less than or equal (<=) operator returns true if the left operand is less than or equal to the right operand,and false otherwise

```js
console.log(2 <= 4); //true
```

####  Greater than or equal (>=)

The greater than or equal (>=)operator returns true if the left operand is greater than or equal to the right operand,and false otherwise

```js
console.log(4 >= 2); //true
```

## Logical Operators 

#### Logical not (!)
The not operator reverse the truth value of a value.If the value is true,it becomes false, and if the value is false it becomes true 
```js
console.log(!(2 !== 2)); //true

const a=3;
const b=-2;

console.log(!(a>0 || b>0)); //false
```

#### Logical and (&&)

The "and" operator,denoted as `&&`, is a logical operator in programming.It performs a logical AND operation between two operands.It returns true if both operand are true,and false otherwise

```js
console.log((2 == 2) && ("white" == "white")) //true

let x = true;
let y = false;

console.log(x && y); // false
```

#### Logical or (||)

The "or" operator,denoted as `||`,is a logical operator in programming. It performs a logical OR operation between two operands. It returns true if at last one of the operands is true, and false if both operands are false

```js
console.log((4 == 2) || ("white" == "white")) //true

console.log((4 == 2) || ("white" != "white")) //false*/
```

## Conditional Stataments

Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

Conditional execution: a block of one or more statements will be executed if a certain expression is true
Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements

#### If COnditional

The "if" statement is a conditional is a statement in programming.It allows you to execute a block of code only if a specified is true

```js
const error = false;

if (error == true) {
    console.log("An error occurred!");
}
// The "else" statament is used in conjunction with the "if" statament in programming. It provides an alternative code block to be executed when the condition of the "if" statament is false

else { console.log("There is no error!")

}

```

```js
const user ="red";

if(user==="red"){
    console.log("User found...")
}
else{
    console.log("User not found...")
}
```

```js
let value=6

if (value=="5");
{
    console.log("The number is equel");
}
else{
    console.log("The number is equel...");
}
```

```js
const process = "10";

if (process === "1") {
    console.log("Operation 1");
}
if (process === "2") {
    console.log("Operation 2");
}
if (process === "3") {
    console.log("Operation 3");
}
else {
    console.log("İnvalid Operation.");
}
```

```js
const number = "120"

if (number === "100") {
    console.log("equal")
}
else {
    console.log("not equal ")
}
```

#### Ternary Operator
The ternary operator,also known as the conditional operator,is a concise way to write an if-else statement in a single line of code .It takes three operands: a condition,a value to be returned if the condition is true, and a value returned if the condition is false

```js
const number = "120"

console.log(number === 100 ? "number 100" : "number not 100")
```

It can be written without curly braces

```js
if (number === "100")
    console.log("number 100 ")
else console.log("number not 100")
```

## Switch-Case Structures

Switch-Case Structures are conditional statements used in programming to  perform different actions based on different conditions. They provide an alternative way to write multiple if-else statements in a more concise and readable manner

```js
const process = 1;

switch (process) {
    case 1:
        console.log("Operation 1")
        break;
    case 2:
        console.log("Operation 2")
        break;
    case 3:
        console.log("Operation 3")
        break;

    default:
        console.log("İnvalid Operation")
}
```

```js
let day = "Monday";

switch ("day") {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Tuesday":
        console.log("It's the second day of the week");
        break;
    case "Wednesday":
        console.log("It's the middle of the week");
        break;

    default:
        console.log("It's another day of the week");
        break;
}
```

## Functions

####  Function Definition 

```js
function hello(name = "There is information", age = "There is information") {
    if (typeof name === "undefined") name = "There is information"
    if (typeof age === "Undefined")
        age === "There is information"
    console.log(`Name:${name} Age: ${age}`);
}
hello("Olivia", 20); // function call

hello("Olga", 22);
hello(); //undefined

// When no value is sent, 'if' is used. hello()
// hello("Olivia");
```

* By using the "return" statement in a function,you can make the function return a value.When the return statement is encountered during the execution of the function,the function stops its execution and the specified value is returned.The value returned by the function is tranferred to the calling place of the function and can be used there

```js
function square(x) {
    return x * x; //144
}
function cube(x) {
    return x * x * x;
}
let a = cube(square(12)); // 2985984

console.log(a);
```

```js
function hello() {
    return "hello";
}
console.log(hello());
```
## Assigment to a function

#### Function Experssion 

```js
const hello = function (name) {
    console.log("Hello " + name);
};

hello("name"); 
```

## Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

```js
(function () {
    // …
  })();

  (() => {
    // …
  })();

  (async () => {
    // …
  })();
```

```js
(function (name) {
    console.log("hello: " + name)
})("Name")
```

## Anonymous Function

```js
const database = {
    host: "localhost",
    add: function () {
        console.log("It has been added")
    },
    get: function () {
        console.log("It has been obdained")
    },
    update: function (id) {
        console.log(`Id:${id} It has been update`);

    },
    delete: function (id) {
        console.log(`Id:${id} It has been delete`)
    },

}

console.log(database.host);

database.add();

database.delete(10);
```

## Loops

In programming we use different loops to carry out repetitive tasks. Therefore, loop can help us to automate tedious and repetitive task. JavaScript has also different types of loops which we can use to work on repetitive task.

Imagine if your are asked to print Hello world one thousand times without a loop, it may take an hour or two to do this tedious task. However, using loop we can print it in less than a second.

#### While loops

The "while" loop is a control flow statement in programming that allows a block of code to be executed repeatedly as long as a specified condition remains true. The loop continues iterating until the condition evaluates to false.

```js
let i = 0; // Infinite loop

while (i < 10){
    console.log(i);

    i++; //i=i+1,i +=1,i++ The concepts have the same meaning.
}
```

```js
let i = 10

while (i > 0) {
    console.log(i);

    i--;
}
```

#### Break and Continue 

"break" statement: When encountered inside a loop (such as "for" or "while" loop), the "break" statement immediately terminates the loop and program execution continues at the next statement after the loop. It allows you to prematurely exit the loop based on a certain condition


```js
let i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }

    i++;
}
```
"continue" statement: When encountered inside a loop, the "continue" statement skips the remaining code within the loop for the current iteration and jumps to the next iteration. It allows you to skip certain parts of the loop based on a condition


```js
let i = 0;

while (i < 10) { //Infinite loop
    if(i==3 || i==5){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
```

#### Do while loop

The "do-while" loop is a control flow statement found in some programming languages. It is similar to the "while" loop, but with a slight difference in execution. In a "do-while" loop, the loop body is executed first, and then the condition is checked. If the condition evaluates to true, the loop body is executed again. The loop continues until the condition becomes false.

```js
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);
```

#### For loop

The "for " loop control flow statement used in programming to iterate over a sequence or perform a set number of iterations.It allows you to repeat a block of code for a specified number o ftimes,iterating over a sequence,or iterating over the elements of a collection

```js
// "The "for" loop consists of three discints parts
- Variable declaration
- Loop condition
- Automatic increment

const langs = ["Python", "Javascript", "Java"];
for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);
}
```

#### forEach

```js
const langs = ["Python", "Javascript", "Java"]

langs.forEach(function (lang,index) {

    console.log(lang,index);
})
```


```js
const users = [
    { name: "Brilinta", age: 20 },
    { name: "Daflon", age: 25 },
    { name: "Lıpathyl", age: 30 },
]
const names = users.map(function (user) {
    ["Brilinta", "Daflon", "Lıpanthyl"]
    return user.name;
});
const ages = users.map(function (user) {
    return user.age;
}

)
console.log(names);
console.log(ages);
```


#### For-in loop,the variable "key"
When iterating over the properties of an object using a "for-in"loop,each iteration assigns the name of the current property to the loop variable (in this case,"key").You can choose any valid variable name to represent the current property name

```js
const user = {
    name: "Crestor",
    age: 22
};
for (let key in user) {
    console.log(key,user[key]);
}
```

## An owerview of the window object

```js
console.log(this.alert("Hello"));*/

```

```js
console.log(window);

```

#### Alert


```js
alert("hello");

const reply = confirm("Are you sure?");

console.log(reply); //true

```

```js
const reply=confirm("Are you sure?");

if(reply){
    console.log("You can delete");
}
else{
    console.loog("Do not delete")
}
```

```js
const reply = prompt("2+2=?")

if (reply == "4") {
    console.log("True");
}
else {
    console.log("False"); 10
}
```

#### Window Features 


```js
let value;

value = window;
value = window.location;
value = window.location.host; // "host" to gain access
value = window.location.hostname //"hostname" to gain access
value = window.location.port //"port" to gain access

if (confirm("Refresh the page?")) {
    window.location.reload()
}
else {
    console.log("The page did not refresh")
}
console.log(value);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript in 30 days</title>
    <style>
        div {
            margin-top: 1000px;
            margin-left: 2000px;
        }
    </style>
</head>
<body>
    <h3 id="h3">Window Features </h3>
    <script src="index.js"></script>
</body>
</html>
```



```js

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port

value = window.outerHeight;
// The "outerHeight" property is a property of the "Window" object in web browsers.It represents the height of the browser window,including the browser's title bar,borders and scrollbars(visible).It provides the total height of the browser window,including any non-contect areas
value = window.outerWidth;
// The "outerWidth" property is a porperty of the "Window" object in web browsers.It represents the width of the browser window,including the browser's borders, scrollbars(if visible),and other non-content elements
value = window.innerHeight;
// The "innerHeight" property of the "window" object in web browsers.It represents the height of the browser window's content area,excluding any browser toolbars,scrollbars,or other non-content elements
value = window.innerWidth;
// The "innerWidth" property is a property of the "window" object in web browsers.It represents the width of the browser window's content area,excluding any browser toolbars,scrollbars,or other non-content elements
value = window.scrollX;
// The "scrollX" property is a property of the window object in web browsers.It represents the horizontal scroll position of the document within the broweser window
value = window.scrollY;
// The "scrollY" property is a property of the "window" object in web browsers.It represents the vertical scroll position of the document within the browser window
console.log(value);
```

## The concept of "Scrope"

- Global Scope
- Function Scope
- Block Scope

#### Global Scope 

```js
var value1 = 10;
let value2 = 20;
const value3 = 30;

function Func() {

    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3);
}
Func();

console.log(value1, value2, value3);
```

#### Differences between "var" and "let"

```js
var value1 = 10;
let value2 = 20;
const value3 = 30;


if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
   
}
console.log(a);
console.log(b);
console.log(c);*/

console.log(value1, value2, value3);
```

```js
var value1 = 10;
let value2 = 20;
const value3 = 30;

if (true) {

    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3);
}
console.log(value1, value2, value3);
```

```js
var database = "123454";

if (true) {
    var a = "345678";
} 
// In JavaScript, variables declared with var are function-scoped and have some unique behaviors that can lead to unintended consequences. One of the main concerns is variable hoisting, where variables declared with var are moved to the top of their scope during the creation phase. This can result in variables being accessed before they are explicitly declared, leading to unexpected behavior and bugs
```