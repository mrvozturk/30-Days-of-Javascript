<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">

  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small>September, 2023</small>
</sub>
</div>

[<< Day 4](../readMe.md) | [Day 5 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)


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
                <form id="todo-form" name="form" action="index.php">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="todo" id="todo"
                                placeholder="Enter a Todo">
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
                        <input class="form-control" type="text" name="filter" id="filter"
                            placeholder="Search for a Todo">
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
# Javascript DOM events

## Event listeners and creating event objects

```js
const filterInput = document.getElementById("filter")

// There are two methods
// -1th method
 filterInput.onfocus = function () {
    console.log("hello world")
} // "search for a todo-the text "hello world" is logged to the console"

```

```js
// -2th method
const filterInput = document.getElementById("filter")

filterInput.addEventListener("focus", function () {
    console.log("hello world");
}); // "search for a todo-the text "hello world" is logged to the console"
```

```js
const filterInput = document.getElementById("filter")

filterInput.addEventListener("focus", function (event) {

    console.log(event);
    console.log(event.type); // type-focus
    console.log(event.target); // The location where event occurred is visible in the console
    console.log(event.target.placeholder); // search for a todo
    console.log(event.target.className); // form-control
}); // Javascript automatically sends an 'event' parameter
```

```js
const filterInput = document.getElementById("filter")


const todoForm = document.getElementById("todo-form")

todoForm.addEventListener("submit", submitForm);
function submitForm(event) {

    console.log("submit event");

    event.preventDefault(); // when clicked on "add to-do", we observe that a submit event is triggered,but since it is within a form and the form has a default behavior,we add an action to override this default behavior and prevent its default action
}
```
## Keyboard events - KeyUP,KeyPress,KeyDown

```js
const filterInput = document.getElementById("filter")

filterInput.addEventListener("focus", function (event) {

    console.log(event);
    console.log(event.type); // type-focus
    console.log(event.target); // The location where event occurred is visible in the console
    console.log(event.target.placeholder); // search for a todo
    console.log(event.target.className); // form-control
}); // Javascript automatically sends an 'event' parameter
```

#### KeyPress

 "keypress" is an event that is triggered when a key on the keyboard is pressed and produces a character value. It is commonly used to capture textual input


```js
document.addEventListener("keypress", run);

function run(event) {

    console.log("hello world");
} // When any number or letter is pressed on the keyboard, the text "hello world" is logged to the console

```

```js
document.addEventListener("keypress", run);

function run(event) {
    console.log(event.which); // l-108 o-111
} // When any letter is clicked according to ASCII,its correspoding value in the ASCII table is logged to the console

```

```js
document.addEventListener("keypress", run);

function run(event) {
    console.log(event.key);
} // We can also see it as an expression in terms of character

```

#### KeyDown

"keydown" refers to an event that is triggered when a key on the keyboard is pressed down.It is a commonly used event in programming to detect and respond to keyboard input.The "keydown" event can be used to capture which key was pressed and perform specific actions or fucntions based on that input


```js
document.addEventListener("keydown", run);

function run(event) {
    console.log(event.key);
}
```
#### KeyUp

"keyup" is an event that is triggered whne a key on the keyboard is released after being pressed down.It is commonly used to detect the end of user input or to implement keyboard shortcuts


```js
document.addEventListener("keyup", run);

function run(event) {
    console.log(event.key);
}
```

```js
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(event) {
    console.log(event.key);
    console.log(event.target); // To see where the event is located
} // When any key is clicked on the keyboard in the "enter a todo" field,the value in the console will also be updated
```

```js
const header = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo");


todoInput.addEventListener("keyup", changeText);

function changeText(event) {
    console.log(event.target.value);
} // To retrieve the next inside the element

```

```js

// The values present in the "enter a todo" field will be dynamically added to the header


const header = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo")

todoInput = addEventListener("keyup", changeText);

function changeText(event) {
    header.textContent = event.target.value;
}
```

## Mause events

```js
const cardBody=document.querySelectorAll(".card-body")[1];

const title=document.querySelector("#tasks-title"); // div class...


console.log(cardBody);

```

```js
const cardBody=document.querySelectorAll(".card-body")[1];

const title=document.querySelector("#tasks-title"); // h5 classs...

console.log(title)
```

#### Click Event

The "click" event is trigered when an element is clicked or tapped by the user,allowing developers to execute specific actions or function in response


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("click", run)

function run(event) {
    console.log(event.type);
}
```

#### Double Click Event

The "double click" event is triggered when an element is quickly clicked twice by the user,allowing develelopers to respond with specific actions or functions


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("dblclick", run);

function run(event) {
    console.log(event.type);
}
```

#### Mouse Down Event


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("mousedown", run)


function run(event) {
    console.log(event.type);
}
```

#### Mouse Up Event

The "Mouse up" event is triggered when a mouse button is released on an element,allowing developers to respond with specific actions or fucntions


```js
cconst cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("mouseup", run)


function run(event) {
    console.log(event.type);
}
```

#### Mouse Over Event

The"mouseover" event is triggered when the mouse cursor enters an element,allowing developers to perform actions or functions in response


```js
const cardBody = document.querySelectorAll(".card-boyd")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("mouseover", run);

function run(event) {
    console.log(event.type);
}
```

#### Mouse Out Event

The "Mouseover" event is triggered whne the mouse cursor leaves an element,allowing developers to perfoem actions or funcitons in response


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

title.addEventListener("mouseover", run)

title.addEventListener("mouseout", run)

function run(event) {
    console.log(event.type);
}
```

#### Cardbody Mouseover and Mouseout

"card body mouseover" is triggered when the mouse cursor enters the card body area while "card boy mouseout" is triggered when the cursor leaves.They are used to implement specific behaviors or effects during mouse hover on or off the card body element


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

cardBody.addEventListener("mouseover", run);
cardBody.addEventListener("mouseout", run);

function run(event) {
    console.log(event.type);
}
```

#### Mouse Enter Event

The "Mouseenter" event is triggeren when the mouse cursor enters an element allowing developers to perform actions or functions in response.It differs from "mouseover" by only being triggered whne entering the element itself,not its child elements


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

cardBody.addEventListener("mouseenter", run);


function run(event) {
    console.log(event.type);
}
```
#### Mouse Leave Event

The "Mouse leave" event is triggered whne the mouse cursor exits an element,allowing developers to perform actions or funvtions in response.It differs from "mouseout" by only being triggered whne leaving the element itself,not its child elements


```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

cardBody.addEventListener("mouseleave", run);

function run(event) {
    console.log(event.type);
}
```
#### Mouse enter and Mouse leave

```js
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);


function run(event) {
    console.log(event.type);
}
```

## Input Events

```js
// 1- const filter = document.querySelector("#filter");

// 2- const filter = document.getElementById("filter");

```
#### DOMContentloaded

DOMContentLoaded is an event used to detect when the HTML document has finished loading and the DOM is ready for manipulation with JavaScript. It is commonly used for tasks such as DOM manipulation, data loading, adding event listeners, and initialization of applications or libraries. It allows you to ensure that your JavaScript code executes at the right moment, after the DOM has fully loaded, without waiting for external resources.


```js
const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded", load);

function load(event){
    console.log("Page has loaded");
}
```

#### Focus Event

```js
const filter = document.getElementById("filter");

filter.addEventListener("focus", run)

function run(event){

    console.log(event.type)
}
```

#### Blur event

"Blur" is a web event that triggers when an element loses focus, such as when a user clicks outside or tabs away from the element. It is often used for tasks like input validation or activating specific behaviors when the user moves away from an element.In summary, "blur" is a web event that detects when an element loses focus, allowing you to handle validation and behavior changes accordingly.


```js
const filter = document.getElementById("filter");


filter.addEventListener("blur", run);

function run(event) {
    console.log(event.type);
}
```

#### Blur and Focus Event

```js
const filter = document.getElementById("filter");

filter.addEventListener("focus", run);
filter.addEventListener("blur", run);

function run(event) {
    console.log(event.type);
}
```
#### Paste Event

The "paste" event is triggered when a user pastes content into an input field or contenteditable element. It allows you to intercept and modify the pasted content before it is inserted. You can use it to perform tasks like data validation, formatting, or customization of the pasted content.In summary, the "paste" event enables you to control the behavior of pasted content and perform desired actions before it appears in the element.


```js
const filter = document.getElementById("filter");

filter.addEventListener("paste", run);

function run(event) {
    console.log(event.type);
}
```

#### Copy Event

The "copy" event is triggered when a user copies content from an input field or contenteditable element. It allows you to modify or add extra information to the copied content before it is added to the clipboard.In short, the "copy" event lets you customize the copied content before it is copied to the clipboard.


```js
const filter = document.getElementById("filter");

filter.addEventListener("copy", run);

function run(event) {
    console.log(event.type);
}
```

#### Cut Event

The "cut" event is triggered when a user removes content from an input field or contenteditable element. It allows you to modify or perform actions with the cut content before it is removed.


```js
const filter = document.getElementById("filter");

filter.addEventListener("cut", run);

function run(event) {
    console.log(event.type);
}
```

#### Select Event

The "select" event is triggered when a user chooses or highlights text in an input field or textarea element. It allows you to access the selected text and perform actions based on the selection.


```js
const filter = document.getElementById("filter");

filter.addEventListener("select", run);

function run(event) {
    console.log(event.type);
}
```

## Event capturing and bubbling

#### Event Bubbling

 Event bubbling, or event propagation, is a feature in web browsers where events triggered on an element are passed up through its parent elements in the document hierarchy. This allows for convenient handling of events at different levels in the hierarchy. Each element along the path has the opportunity to handle the event or perform actions in response to it. However, it's important to be cautious when working with nested elements to avoid unintended event triggering


```js
document.querySelector(".container").addEventListener("click", function () {
    console.log("div container");
});


document.querySelector(".card.row").addEventListener("click", function () {
    console.log("card row")
})

document.querySelectorAll(".card-body")[1].addEventListener("click", function () {
    console.log("card body")
});
```

#### Event Capturing and Delegation

1.Event Capturing: Event capturing is the process of capturing events from the root element to the target element in the DOM hierarchy.

2.Event Delegation: Event delegation is a technique where you assign a single event handler to a parent element and use event bubbling to handle events for multiple child elements.

* In event capturing, the event starts at the root element and moves down to the target element. Event delegation allows a parent element to handle events for its child elements, resulting in improved performance and easier event handling for dynamically created elements. Both concepts provide alternative ways to handle events in the DOM.


```js
const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click", run);

function run(e) {

    console.log("hello world");

}
```


#### To see where the click occurred

```js
const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run)

function run(e) {
    console.log(e.target);
}
```

Performs a deletion operation when the "X" buttons are clicked.


```js
const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run)

function run(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Deletion operation");
    } 
   
} // For the deletion operation
```

Perform a filtering operation when clicked on "Search for a todo" button

```js
const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run)

function run(e) {
    if (e.target.id === "filter") {
        console.log("Filtering operation");
    } 

} //Filtering operation
```

Perform a deletion to clear all tasks when clicked on "Clear all tasks"

```js
const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
    if (e.target.id === "clear-todos") {
        console.log("The operation of clearing all tasks")
    }
} // The Operaiton of clearing all tasks
```