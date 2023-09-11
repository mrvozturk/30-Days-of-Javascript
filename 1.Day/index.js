//SECTION - JavaScript Fundamentals Include Data Types-Objects and Operators 



//SECTION -
//Javascript Beginning
/*var a=10;
alert("welcome to Javascript")
alert(a)*/

//SECTION Console -
/* console.log("Hello Javascript");
 console.log("12345");
 console.log(true);
 console.log(false);

 var a=20;

 console.log(a)

 console.log("Green","yellow");

 console.log(typeof a);

 console.warn("This is a warning.");
 console.error("This page cannot be found!");
 console.clear();*/

//SECTION Variables and Data Types. - 

// "Creating Variables"

/*var a = 20;
var b = 10;
var c = 5;

console.log(a,b,c);*/

/*var a=10; // number Data Type Monitoring.
var b=3.14; // number Data Type Monitoring.
console.log(typeof a);
console.log(typeof b);*/

//"String"

/*var name="White Book"

console.log(name);
console.log(typeof name);*/

//"Boolean"

/*var a = false;

console.log(typeof a);*/

// "Null Data Types"

/*var a = null;
console.log(a)
console.log(typeof a);*/

/*var date=new Date();

console.log(date);
console.log(typeof date);*/


//SECTION Variable declaration Var,Let,Const -
// Var
/*var name = "White Book";

console.log(name);

name = "White";

console.log(name);*/

// Let

/*let a, b;

a = 10
b = 20

console.log(a + b);*/

//Const
/*const name = "White Book";

console.log(name);
//NOTE - A new value cannot be assigned to the "name=white"*/

//SECTION Converting data types- 

//"Converting data types to string"

/*let value;

value = String(123);

console.log(value);
console.log(typeof value);

// Converting data types to numbers

value = Number("123");
value = Number(null)

console.log(value);
console.log(typeof value);*/

//SECTION  Operators and methods of the Math object- 

/*let value;

const value1 = 12;

const value2 = 4;

//"Arithmetic operators"
/*console.log(value1 + value2, value1 - value2, value1 * value2, value1 / value2)*/

/*value = Math.round(3.14);
value = Math.round(3.1);
value = Math.round(3.4);

//"Rounding up (ceiling)"
value = Math.ceil(3.2);


// "Rounding down (flooring)"
value = Math.floor(3.7);
value = Math.floor(3.5);


//"Calculating square root."
value = Math.sqrt(16);
value = Math.sqrt(31);

//"Calculating the absolute value."

value = Math.abs(-20);

//"Calculating exponentiation (power)."

value = Math.pow(8, 3);

//"MAX-MİN"

value = Math.max(10, -1, 3, 100);

value = Math.min(10, 1, -20, 3)

//"Random"
value = Math.random();

value = Math.random() * 20;

value = Math.random() * 20 + 1;

console.log(value)*/

//SECTION Methods of strings - 
/*let value;

const firstname = "Methods";
const lastname = "Strings";

const langs = "Java,Python,C++"

value = firstname + " " + lastname;

value = firstname.length; //Calculating the length.

value = firstname.concat(" ", lastname, " ", "White")//Concatenating strings.

value = firstname.toLowerCase(); //Converting a string to lowercase.
value = firstname.toUpperCase(); //Converting a string to uppercase.

//Index of

value = firstname.indexOf("s");

//Char at

value = firstname.charAt(0);
value = firstname.charAt(firstname.length - 1);

//Split
value = langs.split(",");

//Replace
value = langs.replace("Python", "CSS");

//Includes

value = langs.includes("Java")
value = langs.includes("CSS")
console.log(value)*/

//SECTION New standard for string creation.- 

/*name = "Isabella Petrov";
department = "Information Technology";
salary = "4000$";

/*a="Name:"+name+"\n"+"Department:"+department+"\n"+"Salary:"+salary;*/
/*const a=`Name:${name}\nDepartment:${department}\nSalary:${salary}`;
console.log(a);

const html = ` <ul>
<li>${name}</li>
<li>${department} </li>
<li>${salary} </li>
</ul> `;

document.body.innerHTML = html*/

//SECTION The characteristics of arrays.- 
/*
let value;

const numbers = [43, 51, 33, 22, 50, 35, 5]

const langs = ["Python", "Java", "C++", "Javascript"]

const a = ["Hello", "22", "null", "undefined", "3,14"]

//"Indexing"
value = numbers.length;
value = numbers[2];

//"Changing the value at any index."
numbers[2] = 200;
value = numbers;

//"İndex of"
value = numbers.indexOf(200);

//"Adding a value at the end of the array-push"
numbers.push(300);
value = numbers;

// "Adding a value at the beginning of the array-push"
numbers.unshift(400);
value = numbers;

// "Removing a value at the end of array"
numbers.pop();
value = numbers;

//"Removing a value at the beginning of the array"
numbers.shift()
value = numbers;


//"Deleting a specific portion of it"
numbers.splice(0, 3);
value = numbers;*/



//"Reverse"

/*numbers.reverse();
value = numbers

value = numbers.sort()
value = numbers

value = numbers.sort(function (x, y) {
    return x - y;
}); // "From smallest to largest.""


value = numbers.sort(function (x, y) {
    return y - x;
}); //"From largest to smallest.""


console.log(value);*/

//SECTION In JavaScript, the concept of an object and creating objects - 

/*let value;

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


console.log(value);*/

//SECTION JavaScript Date object and its methods - 

/*let value;

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

console.log(value);/*

/*const person = {
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
  // Asabeneh Yetayeh*/

/*const person = {
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
 

// Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.*/