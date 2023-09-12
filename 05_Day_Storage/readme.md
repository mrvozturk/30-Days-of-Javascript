<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
   
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
    <hr>
    <div class="container">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="Key and Value">Key and Value</span>
            </div>
            <input type="text" id="addkey" class="form-control">
            <input type="text" id="addvalue" class="form-control">
        </div>
        <div class="input-group">
            <div class="input-group-prepend" id="form-control">
                <span class="input-group-text">Key</span>
            </div>
            <input type="text" id="deletekey" class="form-control">
        </div>
        <hr>
        <button class="btn btn-danger" id="add">Add</button>
        <button class="btn btn-danger" id="delete">Delete</button>
        <button class="btn btn-danger" id="clear">Clear</button>
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
    <script src="index.js"></script>
</body>

</html>
```
#### Session Storage
- Session storage is a web browser storage mechanism for temporarily storing data during a user's browsing session. It is similar to local storage but is cleared when the session ends (e.g., when the browser is closed). It provides a key-value storage interface and is useful for storing temporary data within a single session.


```js
// To select the buttons
const add = document.querySelector("#add");

const del = document.querySelector("#delete");

const clear = document.querySelector("#clear");

// Inputs

const addkey = document.querySelector("#addkey");

const addvalue = document.querySelector("#addvalue");

const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);

del.addEventListener("click", deleteItem);

clear.addEventListener("click", clearItems);


function addItem(event) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}
function deleteItem(event) {
    sessionStorage.removeItem(deletekey.value);
}
function clearItems(event) {
    sessionStorage.clear();
} // removes all of them
```
#### Local Storage

## "SET ITEM"

-LocalStorage is a feature in web browsers that allows web applications to store data locally on a user's computer. It provides a way to save small amounts of data as key-value pairs. The stored data persists even after the browser is closed, making it useful for tasks like saving user preferences or caching data for offline use. Web developers can use JavaScript methods like localStorage.setItem(), localStorage.getItem(), and localStorage.removeItem() to interact with LocalStorage. The data is specific to a particular website and remains accessible only to that website.


```js
localStorage.setItem("movement", "pushup")
localStorage.setItem("once more", 50)
```
## "GET ITEM"
-The getItem() method is a built-in method in JavaScript that is used to retrieve the value associated with a specific key from a storage object, such as LocalStorage or SessionStorage.In the case of LocalStorage, you can use localStorage.getItem(key) to retrieve the value stored under a particular key. The method takes the key as an argument and returns the corresponding value associated with that key.

```js
const value = localStorage.getItem("once more");
console.log(value);

console.log(typeof value);
```
##  "Clear Local Storage"

-The clear() method is a built-in method in JavaScript that is used to remove all the key-value pairs stored in LocalStorage. When you invoke localStorage.clear(), it clears all the data stored in the LocalStorage object, effectively deleting all the items stored.

```js
localStorage.setItem("movement", "pushup");
localStorage.setItem("once more", 50);

localStorage.clear();  //-The clear() method is a built-in method in JavaScript that is used to remove all the key-value pairs stored in LocalStorage. When you invoke localStorage.clear(), it clears all the data stored in the LocalStorage object, effectively deleting all the items stored.
```
-"If the queried value does not exist in LocalStorage, the getItem() method returns null."
## localStorage.setItem("movement", "pushup");

```js
if (localStorage.getItem("sport") === null) {
    console.log("The queried value cannot be found")
}
else {
    console.log("The queried value has been found")
}
```

## "Local Storage- Write an Array"

```js
//-"The value received in LocalStorage."

const todos = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("todos", todos)*/

//"A string value is coming."

const todos = ["Todo 1", "Todo 2", "Todo 3"];

console.log(localStorage.getItem("todos"));

```
## "Converting to a string, similar to an array."
```js
const todos = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("todos", JSON.stringify(todos))*/

// -"In the console, each element will be converted into an array."

const todos = ["Todo 1", "Todo 2", "Todo 3"];

const value = JSON.parse(localStorage.getItem("todos"));

console.log(value);
```
/- This code listens to the submit event of a form. It retrieves the value entered by the user and stores it in the LocalStorage. Additionally, it prevents the page from being reloaded using event.preventDefault().

```js
const form = document.getElementById("todo-form"); // to choose the form

const todoInput = document.getElementById("todo"); // to select input

form.addEventListener("submit", addTodo);

function addTodo(event) {

    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value); // localStorage.getItem("todos") retrieves the value associated with the key "todos" from the LocalStorage. If the value doesn't exist, it assigns an empty array to the todos variable. If the value exists, it parses the stored string value back into a JavaScript array using JSON.parse() and assigns it to the todos variable.


    localStorage.setItem("todos", JSON.stringify(todos));


    event.preventDefault(); // It is commonly used in form submit event handlers to prevent the form from being submitted and the page from reloading

}
```