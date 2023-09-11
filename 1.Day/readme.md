<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small> May, 2023</small>
</sub>
</div>

[<< Day 1](../readMe.md) | [Day 2 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)

## JavaScript Refresher

### 0. Adding JavaScript to a Web Page

JavaScript can be added to a web page in three different ways:

- **_Inline script_**
- **_Internal script_**
- **_External script_**

The following sections show different ways of adding JavaScript code to your web page.

#### Inline Script

Create a project folder on your desktop or in any location, name it 30DaysOfJS and create an **_index.html_** file in the project folder. Then paste the following code and open it in a browser, for example [Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>
```

#### Internal Script

The internal script can be written in the _head_ or the _body_, but it is preferred to put it on the body of the HTML document.
First, let us write on the head part of the page.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript in 30 days</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```
#### External Script

External scripts in the _body_:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript in 30 days</title>
  </head>
  <body>
    //it could be in the header or in the body // Here is the recommended place
    to put the external script
    <script src="index.js"></script>
  </body>
</html>
```

Open the browser console to see the output from the console.log()



#### External Script

Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body.
First, we should create an external JavaScript file with .js extension. All files ending with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.

External scripts in the _head_:

#### JavaScript Fundamentals Include Data Types-Objects-Operators

#### Javascript Beginning

```js
var a=10;
alert("welcome to Javascript")
alert(a)
```

#### Console

```js
var a=10;
 console.log("Hello Javascript");
 console.log("12345");
 console.log(true);
 console.log(false);

 console.log(a);
```
#### Console

```js
var a=20;

 console.log(a)

 console.log("Green","yellow");

 console.log(typeof a);

 console.warn("This is a warning.");
 console.error("This page cannot be found!");
 console.clear();
```

#### Variables and Data Types. - 

```js

// "Creating Variables"
var a = 20;
var b = 10;
var c = 5;

console.log(a,b,c);*/

var a=10; // number Data Type Monitoring.
var b=3.14; // number Data Type Monitoring.
console.log(typeof a);
console.log(typeof b);
```
#### String

```js
var name="White Book";

console.log(name);
console.log(typeof name);
```
#### Boolean

```js
var a = false;

console.log(typeof a);
```
#### Null Data Types

```js
var a = null;
console.log(a)
console.log(typeof a);

var date=new Date();

console.log(date);
console.log(typeof date);
```
#### Variable declaration Var-Let-Const

```js
// Var

var name = "White Book";

console.log(name);

name = "White";

console.log(name);
```

```js

// Let

let a, b;

a = 10
b = 20

console.log(a + b);
```


```js

// Const

const name = "White Book";

console.log(name);
```
- A new value cannot be assigned to the "name=white"

####  Converting data types

```js
//Converting data types to string

let value;

value = String(123);

console.log(value);
console.log(typeof value);

// Converting data types to numbers

value = Number("123");
value = Number(null)

console.log(value);
console.log(typeof value);;
```

####  Operators and methods of the Math object

```js
let value;

const value1 = 12;
const value2 = 4;

console.log(value);
```


```js
//Arithmetic operators

console.log(value1 + value2, value1 - value2, value1 * value2, value1 / value2)

value = Math.round(3.14);
value = Math.round(3.1);
value = Math.round(3.4);

console.log(value);
```

```js
//Rounding up (ceiling)

value = Math.ceil(3.2);
console.log(value);

```

```js
// Rounding down (flooring)

value = Math.floor(3.7);
value = Math.floor(3.5);

console.log(value)
```

```js
//Calculating square root

value = Math.sqrt(31);

console.log(value);
```


```js
//Calculating the absolute value

value = Math.abs(-20);

console.log(value);
```

```js
//Calculating exponentiation (power)

value = Math.pow(8, 3);

console.log(value);
```

```js
//MAX-MİN

value = Math.max(10, -1, 3, 100);

value = Math.min(10, 1, -20, 3)

console.log(value);
```

```js

//Random
value = Math.random();

value = Math.random() * 20;

value = Math.random() * 20 + 1;

console.log(value);
```

#### Methods of strings - 

```js
let value;

const firstname = "Methods";
const lastname = "Strings";

const langs = "Java,Python,C++"

value = firstname + " " + lastname;

value = firstname.length; //Calculating the length.

value = firstname.concat(" ", lastname, " ", "White")//Concatenating strings.

value = firstname.toLowerCase(); //Converting a string to lowercase.
value = firstname.toUpperCase(); //Converting a string to uppercase.

console.log(value);
```
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.


```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

```



```js
//Index of

value = firstname.indexOf("s");
console.log(value);
```

```js
//Char at

value = firstname.charAt(0);
value = firstname.charAt(firstname.length - 1);

console.log(value);
```

```js
//Split

value = langs.split(",");
console.log(value);
```

```js
//Replace

value = langs.replace("Python", "CSS");

console.log(value);
```

includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

```js
//Includes

value = langs.includes("Java")
value = langs.includes("CSS")

console.log(value);
```

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] // List of web technologies

console.log(webTechs.includes('Node')) // true
console.log(webTechs.includes('C')) // false
```

#### New standard for string creation.- 

```js
name = "Isabella Petrov";
department = "Information Technology";
salary = "4000$";


* a="Name:"+name+"\n"+"Department:"+department+"\n"+"Salary:"+salary;
const a=`Name:${name}\nDepartment:${department}\nSalary:${salary}`;
console.log(a);

* const html = ` <ul>
<li>${name}</li>
<li>${department} </li>
<li>${salary} </li>
</ul> `;

document.body.innerHTML = html
```
#### The characteristics of arrays

The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.



```js
let value;

const numbers = [43, 51, 33, 22, 50, 35, 5]

const langs = ["Python", "Java", "C++", "Javascript"]

const a = ["Hello", "22", "null", "undefined", "3,14"]

//Indexing

// Print the array and its length

value = numbers.length;
value = numbers[2];

console.log(value);
```
Examples from the Mozilla Developer Network (MDN) Array website.

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6
```

```js
//Changing the value at any index

numbers[2] = 200;
value = numbers;

console.log(value);
```

```js
//İndex of

value = numbers.indexOf(200);

console.log(value);
```
The push() method adds the specified elements to the end of an array and returns the new length of the array

```js
//Adding a value at the end of the array-push

numbers.push(300);
value = numbers;

console.log(value);
```
Array.prototype.push() 
Examples from the Mozilla Developer Network (MDN) Array website.

```js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

```js

// Removing a value at the end of array

numbers.pop();
value = numbers;

//Removing a value at the beginning of the array

numbers.shift()
value = numbers;

console.log(value);
```


The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

```js

//Deleting a specific portion of it

numbers.splice(0, 3);
value = numbers;

console.log(value);
```

* The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

```

* The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

* To reverse the elements in an array without mutating the original array, use toReversed().



```js

//Reverse

numbers.reverse();
value = numbers

value = numbers.sort()
value = numbers

value = numbers.sort(function (x, y) {
    return x - y;
}); // "From smallest to largest.""


value = numbers.sort(function (x, y) {
    return y - x;
}); //"From largest to smallest.""


console.log(value);
```
The following example creates an array items, containing three elements, then reverses the array. The call to reverse() returns a reference to the reversed array items.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

#### In JavaScript, the concept of an object and creating objects 

```js
let value;

const programmer = {
    name: "Olivia Chen",
    age: "25",
    email: "example@example.com",
    langs: ["Java", "C++", "Python"],



    address: {
        city: "Barcelona",
        street: "Carrer de Passeig de Gràcia",
    },
    work: function () {
        console.log("The programmer is actively working...");

    }
}
value = programmer;

value = programmer.email;

value = programmer.langs;

value = programmer.address.city;

const programmers = [
    { name: "olivia chen", age: 25 },
   
]

console.log(value);
```
#### Array.from()

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]

```

#### JavaScript Date object and its methods

```js
let value;

const now = new Date();
console.log(now);

const date1 = new Date("06-01-2023 06:15:00");

const date2 = new Date("June 01 2023");

const date3 = new Date("06-01-2023");

value = date1

value = date1.getMonth();

value = date1.getDate();

value = date1.getDay();

value = date1.getHours();

value = date1.getMinutes();

value = date1.getSeconds();

value = date1.getMilliseconds();

// Changing the date

date1.setMounth(7);

date1.setDate(15);

date1.setFullYear(2001);

date1.setHours(0);

date1.setMinutes(15);

date1.setSeconds(30);

console.log(value);


```
#### Creating object methods

Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The _this_ key word refers to the object itself. We can use the word _this_ to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

```js
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },
  }
  
  console.log(person.getFullName())
  // Asabeneh Yetayeh
```
#### Setting new key for an object

An object is a mutable data structure and we can modify the content of an object after it gets created.
```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true
 
person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.slice(this.skills.length - 1)[0]
 
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

```sh
Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```



