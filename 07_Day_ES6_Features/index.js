//SECTION - ES6 Features

//SECTION - Arrow Function

//An arrow function is a concise syntax introduced in ES6 (ECMAScript 2015) for defining functions in JavaScript. It provides a shorter and more readable way to write function expressions. Instead of using the "function" keyword, arrow functions use an arrow (=>) to separate the function parameters from the function body.
/*const hello = function () {
    console.log("hello")
}

hello(); // Can be written shorter with arrow */
/*const hello = () => {
    console.log("hello")
}

hello();*/

/*const hello = (firstName, lastName) => console.log("hello", firstName, lastName)

hello("Emily", "Stefen") // In arrow functions where curly braces are omitted, if the function body consists of only one expression, you can directly return the expression without using curly braces and the return keyword. This allows for shorter and more readable code.*/


//SECTION - Destructing

// Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a concise way. It makes your code shorter and easier to read.

/*let number1, number2;

array = [100, 200, 300, 400];

number1 = array[0];
number2 = array[1];

console.log(number1, number2);*/

/*let number1, number2;

array = [100, 200, 300, 400];

[number1, number2] = array;

console.log(number1, number2);*/

// "Obje destructing"

// Object destructuring in JavaScript allows you to extract values from an object and assign them to variables in a concise way. It simplifies accessing specific properties of an object by directly assigning them to variables with matching names. This makes your code shorter and more readable.

/*const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50,
}

const {a,c,e}=numbers

console.log(a,c,e) // 10 30 50*/

// "Function destructing"

/*const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();

console.log(lang1, lang2, lang3)*/


/*function greet({ name, age }) {
    console.log(`Hello ${name}! You are ${age} years old.`);
  }

  const person = {
    name: 'John',
    age: 30
  };

  greet(person); // Output: Hello John! You are 30 years old.*/

//SECTION - Spread operator

//  The spread operator in JavaScript, denoted by three dots (...), allows you to expand arrays, objects, or function arguments into individual elements. It simplifies tasks such as merging arrays or objects, or passing multiple arguments to a function. The spread operator provides a concise and efficient way to work with these data structures.

/*const langs=["Python", "Java", "C++"];

console.log(...langs)*/

//SECTION - For In and For Of loop

// "for...in" loop: Iterates over object properties."for...of" loop: Iterates over iterable values like arrays, strings, maps, sets, etc.

/*const person = {
    name: "John",
    age: 50,
    salary: 3000
};

const langs = ["Python", "Java", "C++"];

const name = "John";

// for ın
// object

for (let properties in person){

    console.log(properties,person[properties]);
}*/

/*const person = {
    name: "John",
    age: 50,
    salary: 3000
};

const langs = ["Python", "Java", "C++"];

const name = "John";
//Array
//Object
for (let index in langs){
    console.log(index,langs[index]);
}*/

//String

/*const person = {
    name: "John",
    age: 50,
    salary: 3000
};

const langs = ["Python", "Java", "C++"];

const name = "John";
for(let index in name){
    console.log(index,name[index]);
}*/

// Object
/*const person = {
    name: "John",
    age: 50,
    salary: 3000
};

const langs = ["Python", "Java", "C++"];

const name = "John";

for (let character of name){
    console.log(character)
}*/

//SECTION - Javascript ES6 Maps

// Maps - Key - Value
// JavaScript ES6 Maps are data structures that store key-value pairs in an ordered manner. They offer flexibility in using various data types as keys, maintain the insertion order, and provide methods for adding, accessing, and deleting entries. Maps are useful when you need a structured way to store and retrieve data in your JavaScript code.

/*let myMap = new Map(); // creating

// console.log(myMap);

const key1 = "john"

const key2 = { a: 10, b: 20 };

const key3 = () => 2;
// Set
myMap.set(key1, "string value");

myMap.set(key2, "object literal value");

myMap.set(key3, "function value");*/

// Get
/*let myMap = new Map(); // creating

const key1 = "john"

const key2 = { a: 10, b: 20 };

const key3 = () => 2;

myMap.set(key1, "string value");

myMap.set(key2, "object literal value");

myMap.set(key3, "function value");

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));*/

// Map size

/*let myMap = new Map(); // creating

const key1 = "john"

const key2 = { a: 10, b: 20 };

const key3 = () => 2;

myMap.set(key1, "string value");

myMap.set(key2, "object literal value");

myMap.set(key3, "function value");

console.log(myMap.size); // 3*/

// New Map

/*const cities = new Map();

cities.set("Paris", 5);

cities.set("Hollanda", 15);

cities.set("Barcelona", 4);

// For Each

cities.forEach(function (value, key) {
    console.log(key, value);
});*/

// For Of

/*const cities = new Map();

cities.set("Paris", 5);

cities.set("Hollanda", 15);

cities.set("Barcelona", 4);

for (let [key, value] of cities) { // Destructing
    console.log(key, value)
}*/


// Map Keys

/*const cities = new Map();

cities.set("Paris", 5);

cities.set("Hollanda", 15);

cities.set("Barcelona", 4);

for (let key of cities.keys()) {
    console.log(key)
}*/

// Map Value


/*const cities = new Map();

cities.set("Paris", 5);

cities.set("Hollanda", 15);

cities.set("Barcelona", 4);

for (let value of cities.values()){
    console.log(value)
}*/

// Creating maps from arrays


/*const cities = new Map();

cities.set("Paris", 5);

cities.set("Hollanda", 15);

cities.set("Barcelona", 4);


const array = [["key1", "value1"], ["key2", "value2"]];

const lastMap = new Map(array);

console.log(lastMap);*/

// Creating arrays from maps

/*const cities = new Map();

cities.set("Paris", 5);

cities.set("Hollanda", 15);

cities.set("Barcelona", 4);

const array= Array.from(cities);

console.log(array);*/

//!SECTION Javascript ES6 Sets

// Sets

/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);

console.log(myset);
console.log(myset2);*/

// Size

/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);


console.log(myset.size)*/

// Delete method

/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);

myset.delete("John")

console.log(myset)*/

// Has method

/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);

console.log(myset.has(3.14)) // true*/

// For Each

/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);
myset.forEach(function(value){
    console.log(value)
});*/


// For Of


/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);

for(let value of myset){
console.log(value);
};*/

// From method 


/*const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add((1, 2, 3));

const myset2 = new Set([100, 3.14, "John"]);

 const array=Array.from(myset);

 console.log(array)*/