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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>JavaScript in 30 days</title>
    <style>
        * {
            box-sizing: border-box;
        }

        /* Remove margins and padding from the list */
        ul {
            margin: 0;
            padding: 0;
        }

        /* Style the list items */
        ul li {
            cursor: pointer;
            position: relative;
            padding: 12px 8px 12px 40px;
            list-style-type: none;
            background: #eee;
            font-size: 18px;
            transition: 0.2s;


        }

        /* Set all odd list items to a different color (zebra-stripes) */
        ul li:nth-child(odd) {
            background: #f9f9f9;
        }

        /* Darker background-color on hover */
        ul li:hover {
            background: #ddd;
        }

        /* When clicked on, add a background color and strike out text */
        ul li.checked {
            background: #888;
            color: #fff;
            text-decoration: line-through;
        }

        /* Add a "checked" mark when clicked on */
        ul li.checked::before {
            content: '';
            position: absolute;
            border-color: #fff;
            border-style: solid;
            border-width: 0 2px 2px 0;
            top: 18px;
            left: 6px;
            transform: rotate(45deg);
            height: 15px;
            width: 7px;
        }
    </style>
</head>

<body style="background-color:saddlebrown">
    <div class="container" style="margin-top:20px;">

        <div class="card row" style="background-color:antiquewhite;">
            <div class="card-header">Todo List</div>
            <div class="card-body">
                <form id="todo-form" name="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="todo" id="todo" placeholder="Enter a Todo">
                        </div>
                    </div>

                    <button type="submit" class="btn btn-dark">Add a Todo</button>

                </form>

            </div>

            <div class="card-body">
                <hr>
                <h5 class="card-title" id="tasks-title">Todos</h5>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input class="form-control" type="text" name="filter" id="filter"
                            placeholder="Search for a Todo">
                    </div>
                </div>


                <ul class="list-group">

                    <!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->


                </ul>

                <hr>
                <a id="clear-todos" class="btn btn-dark" href="#">Clear all tasks</a>
                <hr>


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

```js
const form = document.querySelector("#todo-form"); // To add a todo
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstcardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {
    form.addEventListener("submit", addTodo);
}
function addTodo(event) {
    const newTodo = todoInput.value.trim();
    // -The trim() method removes whitespace from both sides of a string:

    addTodoToUI(newTodo); // Adding the todo to the interface.

    console.log(newTodo);
    event.preventDefault();
}
//-"Adding the todo to the interface."
function addTodoToUI(newTodo) {
    /* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>


    */
const listItem = document.createElement("li"); // Creatin a list item
const link = document.createElement("a"); // Creating a link
link.href = "#";
link.className = "delete-item";
link.innerHTML = "<i class='fa fa-remove'></i>";
listItem.className = "list-group-item d-flex justify-content-between"
listItem.appendChild(document.createTextNode(newTodo)); // Adding a text node
listItem.appendChild(link); // Adding a list item to the todo list
todoList.appendChild(listItem);
todoInput.value = ""; // "To clear the input."

console.log(listItem);
}
```


```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("filter")

const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {
    form.addEventListener("submit", addTodo);
}


function addTodo(event) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") { // "If the new todo value is empty, an alert message will appear."

        //<div class="alert alert-danger" role="alert"> This is a danger alert—check it out!</div>
        showAlert("danger", "Please enter a todo...") // "We need to specify the 'type' and 'message'."
    }
    else {
        addTodoToUI(newTodo); // "If the new todo value is not empty..."
        showAlert("success", "The todo was successfully added...") //"The todo was successfully added."
    }

    event.preventDefault();
}
//-To create a dynamic element
function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`; // "The template string in the code snippet, denoted by the parentheses ( ) and the ${type} expression, is used to interpolate the value of the variable into it. Here, the type variable can be dynamically changed, allowing for the class name to be modified as well."
    alert.textContent = message; // Assigns the value of the message variable to the textContent property of the alert variable, which is a variable in this case."
    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1000); // "The alert disappears after 1 second of being displayed."
}

function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```



```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {
    form.addEventListener("submit", addTodo);
}


function addTodo(event) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {

        //<div class="alert alert-danger" role="alert"> This is a danger alert—check it out!</div>
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo); // "We are adding a new 'addTodoToStorage' function."
        showAlert("success", "The todo was successfully added...")


    }
    event.preventDefault();
}
function getTodosFromStorage() { // "To retrieve todos from the storage."
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos; // the return todos statement, within the context of the function, provides feedback to the user by returning the todos or an empty array.
}// This code retrieves todos from the storage using the "todos" key and returns them. If there are no todos in the storage, an empty array is returned.
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo); // The new todo, represented by the newTodo parameter, is added to the todos array using the push method.

    localStorage.setItem("todos", JSON.stringify(todos));
} // The getTodosFromStorage function ensures that you retrieve the current todos before adding the new one, and then the updated todos are stored back into the storage.

//-To create a dynamic element
function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1000);
}

function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```


```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");


eventListener();


function eventListener() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI) // The code document.addEventListener("DOMContentLoaded", loadAllTodosToUI) executes the loadAllTodosToUI function when the page content has been completely loaded. This is used to automatically perform certain operations when the page is loaded.
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
} // The loadAllTodosToUI() function retrieves the todos by calling the getTodosFromStorage() function and then iterates over each todo item, invoking the addTodoToUI() function to load all the todos into the user interface.




function addTodo(event) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {

        //<div class="alert alert-danger" role="alert"> This is a danger alert—check it out!</div>
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "The todo was successfully added...")


    }
    event.preventDefault();
}


function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


//-To create a dynamic element
function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1000);
}



function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```

```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");


eventListener();


function eventListener() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    if (event.target.className === "fa fa-remove") {
        event.target.parentElement.parentElement.remove();
    }
    showAlert("success", "Todo successfully deleted")

} //This JavaScript function is used to delete a todo item from the user interface. The function checks the class name of the event's target element. If the class name is "fa fa-remove," it removes the todo item from the user interface.
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}


function addTodo(event) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {

        //<div class="alert alert-danger" role="alert"> This is a danger alert—check it out!</div>
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "The todo was successfully added...")


    }
    event.preventDefault();
}


function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


//-To create a dynamic element
function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1000);
}



function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```

```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");


eventListener();

function eventListener() {
    form.addEventListener("submit", addTodo)
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    if (event.target.className === "fa fa-remove") {
        event.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(event.target.parentElement.parentElement.textContent); //This statement triggers an HTML event and uses the deleteTodoFromStorage function to delete a todo from localStorage. The text content of the parent element's parent element of the delete button is passed as a parameter to the deleteTodoFromStorage function.
    }
    showAlert("success", "Todo successfully deleted");
}

//This function takes a specific "deleteTodo" value and deletes a todo from localStorage. The process is carried out through the following steps:

//Retrieve the current todo list using the getTodosFromStorage function.
//Create a "todos" array and assign the todo list to it.
//Iterate over the "todos" array using a loop.
//If a todo matches the "deleteTodo" value, remove that todo from the array.
//Save the updated "todos" array to localStorage.
//In summary, the deleteTodoFromStorage function encompasses the necessary steps to remove a todo from localStorage based on the provided deleteTodo value.
function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1); // the expression todos.splice(index, 1) is used to remove 1 element (the todo we want to delete) from the todos array at the specified index. This operation is performed when we find a match between the todo and the deleteTodo value.
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(event) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {

        //<div class="alert alert-danger" role="alert"> This is a danger alert—check it out!</div>
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "The todo was successfully added...")


    }
    event.preventDefault();
}
function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1000);
}


function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```

```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");

eventListener();
function eventListener() {
    form.addEventListener("submit", addTodo)
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo)
    filter.addEventListener("keyup", filterTodos);
}
//This function takes an event object as a parameter, which is typically triggered by a user action (such as typing into an input field). The function is designed to filter a list of todos based on the entered value.
function filterTodos(event) {
    const filterValue = event.target.value.toLowerCase() //filterValue is assigned the lowercase value of the input by accessing event.target.value. This ensures that the filter is case-insensitive.
    const listItems = document.querySelectorAll(".list-group-item") // listItems is assigned the collection of DOM elements with the class "list-group-item" using document.querySelectorAll. It assumes that there are multiple elements with this class.

    listItems.forEach(function (listItem) { //The forEach method is used to iterate over each listItem in the listItems collection.
        const text = listItem.textContent.toLowerCase(); //Within the loop, textContent is accessed on each listItem to retrieve the lowercase text content of the element.

        if (text.indexOf(filterValue) === -1) {

            listItem.setAttribute("style", "display:none !important")
        } // The if statement checks if filterValue is not found within the text using indexOf. If it is not found (indexOf returns -1), the element's style is set to "display:none !important" using setAttribute, effectively hiding the element.

        else {
            listItem.setAttribute("style", "display:block")
        } // If the filterValue is found in the text, the element's style is set to "display:block", making it visible.
    })
}


function deleteTodo(event) {
    if (event.target.className === "fa fa-remove") {
        event.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(event.target.parentElement.parentElement.textContent); //This statement triggers an HTML event and uses the deleteTodoFromStorage function to delete a todo from localStorage. The text content of the parent element's parent element of the delete button is passed as a parameter to the deleteTodoFromStorage function.
    }
    showAlert("success", "Todo successfully deleted");
}
function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1); // the expression todos.splice(index, 1) is used to remove 1 element (the todo we want to delete) from the todos array at the specified index. This operation is performed when we find a match between the todo and the deleteTodo value.
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}


function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}


function addTodo(event) {
    const newTodo = todoInput.value.trim()
    if (newTodo === "") {
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "The todo was successfully added...")
    }
    event.preventDefault();
}

function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}





function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);


    setTimeout(function () {
        alert.remove();
    }, 1000)
}



function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```

```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");


eventListener();

function eventListener() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);

}

function clearAllTodos(event) {
    // remove todos form interface 

    if (confirm("Are you sure you want to delete all of them?")) {
        // There are several methods available.

        // todoList.innerHTML = ""; // slow

        // todoList.removeChild(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild);
        // todoList.removeChild(todoList.firstElementChild);
        // console.log(todoList.firstElementChild); // Fixed Number of Item Deletion: The current code aims to remove only a specific number of items (in this case, three items) using removeChild. However, this limits the flexibility of the code. If there are more or fewer items in the list, the code would need to be manually adjusted each time. A more general approach would be preferable.

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        } // The update in the code allows for flexible removal of items. Instead of using a fixed number of removeChild statements, a while loop is now utilized. The while loop runs as long as the first child element of todoList is not null. In each iteration, the first child element of todoList is removed using removeChild. This loop is used to dynamically remove all items from the list.

        localStorage.removeItem("todos"); // When the page is refreshed, the todos are not retrieved because they are deleted from the local storage.

    }
}
  
  

function filterTodos(event) {
    const filterValue = event.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase()
        if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display:none !important")
        }
        else {
            listItem.setAttribute("style", "display:block")
        }
    })
}

function deleteTodo(event) {
    if (event.target.className === "fa fa-remove") {
        event.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(event.target.parentElement.parentElement.textContent)
    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}



function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(event) {
    const newTodo = todoInput.value.trim()
    if (newTodo === "") {
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "The todo was successfully added...")
    }
    event.preventDefault();
}
function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);


    setTimeout(function () {
        alert.remove();
    }, 1000)
}


function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```

#### Final state of the project
```js
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter")

const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);

}


const list = document.querySelector('ul');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false) // The code selects a <ul> element, adds a click event listener to it, and toggles the checked class on the clicked list item. This visually marks the item as checked or unchecked.


function clearAllTodos(event) {

    if (confirm("Are you sure you want to delete all of them?")) {
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");

    }
}   

function filterTodos(event) {
    const filterValue = event.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase()
        if (text.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display:none !important")
        }
        else {
            listItem.setAttribute("style", "display:block")
        }
    })
}

function deleteTodo(event) {
    if (event.target.className === "fa fa-remove") {
        event.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(event.target.parentElement.parentElement.textContent)
    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}



function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(event) {
    const newTodo = todoInput.value.trim()
    if (newTodo === "") {
        showAlert("danger", "Please enter a todo...")
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "The todo was successfully added...")
    }
    event.preventDefault();
}
function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];

    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage()

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);


    setTimeout(function () {
        alert.remove();
    }, 1000)
}



function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);
}
```