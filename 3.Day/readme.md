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

[<< Day 3](../readMe.md) | [Day 4 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>JavaScript in 30 days</title>
</head>

<body>

    <div class="container" style="margin-top: 20px;">
        <div class="card row">
            <div class="card-header">Todo-list</div>
            <div class="card-body">
                <form id="todo-form" name="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="todo" id="todo" placeholder="Enter a Todo">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger">Add a Todo</button>
                </form>
            </div>
            <div class="card-body">
                <hr>
                <h5 class="card-title" id="tasks-title">Todo's</h5>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input class="form-control" type="text" name="filter" placeholder="Search for a Todo">
                    </div>
                </div>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between">Todo1
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>

                    </li>
                    <li class="list-group-item d-flex justify-content-between">Todo2
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>

                    </li>
                    <li class="list-group-item d-flex justify-content-between">Todo3
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>

                    </li>
                    <li class="list-group-item d-flex justify-content-between">Todo4
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>

                    </li>
                </ul>
                <hr>
                <a href="#" id="clear-todos" class="btn btn-dark">Clear all tasks</a>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>

</html>
```
# JavaScript DOM Manipulation

## Window object

```js
let value;

value = document;

value = document.all;

value = document.all.length; // 44
value = document.all[0]; //0th element.
value = document.all[6]; //6th element.
value = document.all[document.all.length - 1]; // last element


console.log(value);

```

```js
let value;


const elements = document.all;
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);

} // all HTML collections

```


```js
let value;


const collections = Array.from(document.all);

collections.forEach(function (collection) {
    console.log(typeof collection);
    
}); // 44 object

```


```js
let value;

value = document.all[8]; // <body></body>
value = document.body; // <body></body>
value = document.head; // <head></head>
value = document.location; // location...
value = document.location.hostname; // 127.0.0.1
value = document.location.port; //5500
value = document.URL;  // TOTAL URL
value = document.characterSet; // metaSet:UTF-8

console.log(value);

```

## Scripts

```js
let value;

value = document;

value = document.scripts; // html collection(4) script
value = document.scripts.length; // 4
value = document.scripts[0]; // script

console.log(value);

```

## Links

```js
let value;

value = document;

value = document.links; // html collection( 5 link)

value = document.links[0]; // First link
value = document.links[document.links.length - 1]; // Last link
value = document.links[document.links.length - 1].getAttribute("class"); // btn btn-dark "classs"
value = document.links[document.links.length - 1].className; // btn btn-dark
value = document.links[document.links.length - 1].classList; // btn btn-dark,btn btn-dark

console.log(value);
```


## Forms

```js
let value;

value=document.forms ; // html collection forms
value=document.forms.length; // 1 forms
value=document.forms[0]; // first form
value=document.forms["form"]; // if name desired to be selected within form
value=document.forms[0].id; // todo-form
value=document.forms[0].getAttribute("id") //todo-form
value=document.forms[0].getAttribute("name"); // form
value=document.forms[0].method; // get

console.log(value);

```

## To selected the elements

#### Selecting the elememt by "id"

```js
let element;

element=document.getElementById("todo-form") // form id
element=document.getElementById("tasks-title") // tasks title


console.log(element);

```

#### Selecting the elements by class

```js
let element;

element=document.getElementsByClassName("list-group-item"); // html collection 4 "li"
element=document.getElementsByClassName("list-group-item")[0]; // first "li"
element=document.getElementsByClassName("card-header") // card header

console.log(element);

```

#### Seleceting the elements by tag

```js
let element;

element=document.getElementsByTagName("li"); // html collection 4 "li"
element=document.getElementsByTagName("div"); // html collection 9 "div"
element=document.getElementsByTagName("div")[8] // last div

console.log(element);

```

## Query Selector - Css Selector

#### CSS SELECTOR

```js

p {
  CSS properties
}


#my-element {
     CSS properties
  }

```

#### QUERY SELECTOR


```js

// It selects a single item on the page

let element;

element = document.querySelector("#todo-form"); // todo-form
element = document.querySelector("#tasks-title"); // card-title
element = document.querySelector(".list-group-item"); // li
element = document.querySelector("li"); // first li
element = document.querySelector("div"); // first div

console.log(element);
```

#### QuerySelectorAll 

```js

// Select all elements

let element;

element = document.querySelectorAll(".list-group-item"); // NodeList 4

console.log(element);
```

```js

let element;

element=document.querySelectorAll(".list-group-item");
element.forEach(function (el) {
    console.log(el);
}); // nodelist "li"

```

## Selecting elements and changing style properties

```js
const element=document.querySelector("#clear-todos"); // id clear todos

console.log(element);

```

#### Elements properties

```js
const element = document.querySelector("#clear-todos");

console.log(element.id); // clear todos

console.log(element.className); // btn btn-dark

console.log(element.classList); // domtokenlist 2 "btn btn-dark"

console.log(element.classList[1]); // btn-dark

console.log(element.textContent); // clear or tasks

console.log(element.innerHTML);//clear or tasks

console.log(element.href); // https...

console.log(element.style); // CSSStyleDeclaration

```

#### Changing the elements and their style properties

```js
const element=document.querySelector("#clear-todos");

element.className="btn btn-primary";

element.style.color="#000";

element.style.marginLeft="5px";

element.href="https://bbc-blog.vercel.app/"

element.target="_blank";

console.log(elements)

```

```js
const element = document.querySelector("#clear-todos");


element.textContent = "Delete"

element.innerHTML = "<span style='color:green'>Delete</span>"

console.log(element);

```

```js
const elements = document.querySelectorAll(".list-group-item");

elements.forEach(function (el) {
  el.style.color = "red";
  el.style.background="#eeee";
}); 

console.log(elements);
```

```js
1- let element2 = document.querySelector("li"); // first "li"
2- let element2 = document.querySelector("li:last-child"); // last "li"
3- let element2 = document.querySelector("li:first-child"); // first "li"
element2 = document.querySelector("li:nth-child(2)") // 2th "li"
element2 = document.querySelector("li:nth-child(3)") // 3th "li"
element2 = document.querySelector("li:nth-child(4)") // 4th "li"
element2 = document.querySelectorAll("li:nth-child(odd)"); //nodelist 1 and 3 "li"
element2 = document.querySelectorAll("li:nth-child(even)") // nodlist 2 and 4 "li"
console.log(element2);

```

```js

element2 = document.querySelectorAll("li:nth-child(even)")

element2.forEach(function (el) {
  el.style.background = "#ccc";
  el.style.color = "red";
});

console.log(element2);
```

```js

let value;

const todoList = document.querySelector(".list-group") // ul.list-group

const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row")

value = todoList;
value = todo;
value = cardrow;

// Child Nodes - It includes all the texts

value = todoList.childNodes;
value = todoList.childNodes[0];

console.log(value);

```

Children- It will only take the elements,it will not include the texts

```js

let value;
const cardrow = document.querySelector(".card.row");
const todoList = document.querySelector(".list-group");
value = todoList.children; // htmlcollection 4
value = todoList.children[todoList.children.length - 1]; // last "li"
value = todoList.children[2].textContent = "Todo3.1";

value = cardrow; // div class "cardrow"

value = cardrow.children;// html collection 3 "div.card"

value = cardrow.children[2]; //2th children

value = cardrow.children[2].children; // hr,ul,list-group ... childrens

value = cardrow.children[2].children[1].textContent = "Search ";

value = todoList;
value = todoList.firstElementChild; // first children
value = todoList.lastElementChild; // last children

console.log(value);

```
The number of children in a todoList and we can achieve the same result in both cases


```js

let value;

const cardrow = document.querySelector(".card.row")
const todoList = document.querySelector(".list-group");

value = todoList.children.length; // 4
value = todoList.childElementCount; // 4

console.log(value); 

```

#### To find parent

```js

let value;
const cardrow = document.querySelector(".card.row")
const todoList = document.querySelector(".list-group");

value = cardrow;
value = cardrow.parentElement; // div class"container"
// To get the parent of the "container"
value = cardrow.parentElement.parentElement // body

console.log(value);

```

## Creating a new element

```js
// <a href="#" id="clear-todos" class="btn btn-dark">Clear all tasks</a>

const newLink = document.createElement("a"); // new link

const cardbody = document.getElementsByClassName("card-body")[1]; // card-body

newLink.id = "clear-todos"
newLink.className = "btn btn-danger"  // another class was created
newLink.href = "https://www.merveozturk.dev/"
newLink.target = "_blank"

// Text Node
newLink.appendChild(document.createTextNode("Go to a different page"));

cardbody.appendChild(newLink)

console.log(newLink);

```

## Deleting a dynamic element


```js
const todoList = document.querySelector("ul.list-group"); // ul class

const todos = document.querySelectorAll("li.list-group-item"); // nodolist (4)

console.log(todos);
console.log(todoList);

```

#### Remove Method

```js
const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");

todos[0].remove()  // first li delete

todos[1].remove() // 2th li delete

console.log(todoList);

console.log(todos);

```

#### Remove child

```js
const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");

// We can do it in two ways
todoList.removeChild(todoList.lastElementChild); // last child delete
todoList.removeChild(todos[3]); // last child delete

console.log(todoList);

console.log(todos);

```

## Swapping elements with each other

#### Replace 

```js
const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3"); // new element "h3"

newElement.className = "card-title" // new class
newElement.id = "task-title" // new id
newElement.textContent = "New Todos" // new textcontent

// Old element

const oldElement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement, oldElement); // new textcontent came

console.log(oldElement); // old element
console.log(cardbody);// 1th cardbody
console.log(newElement); // new element

```

## Dynamıc attribute Modification,Deletion,Addition

```js
const todoInput = document.getElementById("todo")

let element;
element = todoInput;
element = todoInput.classList; // form control

// 2 new classes will be added

todoInput.classList.add("newClass"); // first newclass
todoInput.classList.add("newClass2"); // 2th new class
todoInput.classList.remove("form-control"); // old class delete
element = todoInput;
console.log(element);

```


```js
const todoInput = document.getElementById("todo");

let element;

element = todoInput;
element = todoInput.classList;


element = todoInput;
// we can do it two ways
element = todoInput.placeholder // enter a todo
element = todoInput.getAttribute("placeholder"); // enter a todo
// new placeholder
todoInput.setAttribute("placeholder", "new placeholder")  //  placeholder replace and newplaceholder name "newplaceholder"
todoInput.setAttribute("title", "input");
todoInput.removeAttribute("name"); // name attribute delete

element = todoInput; // let's check the newly assigned element in the console
element = todoInput.hasAttribute("name"); // Lets's check if this attribute exists here "true"

console.log(element);

```