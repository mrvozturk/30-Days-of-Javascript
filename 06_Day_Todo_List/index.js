//SECTION - Todo List Project

//SECTION Inferface rocognition and adding todos-

//-"To select all elements."
/*const form = document.querySelector("#todo-form"); // To add a todo
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
/*const listItem = document.createElement("li"); // Creatin a list item
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
}*/
//SECTION "Informational messages."-

/*const form = document.querySelector("#todo-form");
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
}*/

//SECTION - "To add todos to the storage."

/*const form = document.querySelector("#todo-form");
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
}*/

//SECTION - "When the page is loaded, add the todos."

/*const form = document.querySelector("#todo-form");
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
}*/

//SECTION - To delete todos from the interface.


/*const form = document.querySelector("#todo-form");
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
}*/

//SECTION - Deleting todos from storage"

/*const form = document.querySelector("#todo-form");
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
}*/

//SECTION - Filtering the todos

/*const form = document.querySelector("#todo-form");
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
}*/


//SECTION - Clearing all todos

/*const form = document.querySelector("#todo-form");
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
}*/

//SECTION - Completed todos

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