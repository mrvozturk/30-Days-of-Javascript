//SECTION - The stroge areas in web browsers

//SECTION Session Storage - 

//- Session storage is a web browser storage mechanism for temporarily storing data during a user's browsing session. It is similar to local storage but is cleared when the session ends (e.g., when the browser is closed). It provides a key-value storage interface and is useful for storing temporary data within a single session.

// To select the buttons

/*const add = document.querySelector("#add");

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
} // removes all of them*/

//SECTION - local Storage

// "SET ITEM"

//-LocalStorage is a feature in web browsers that allows web applications to store data locally on a user's computer. It provides a way to save small amounts of data as key-value pairs. The stored data persists even after the browser is closed, making it useful for tasks like saving user preferences or caching data for offline use. Web developers can use JavaScript methods like localStorage.setItem(), localStorage.getItem(), and localStorage.removeItem() to interact with LocalStorage. The data is specific to a particular website and remains accessible only to that website.

/*localStorage.setItem("movement", "pushup")
localStorage.setItem("once more", 50)*/

// "GET ITEM"

//-The getItem() method is a built-in method in JavaScript that is used to retrieve the value associated with a specific key from a storage object, such as LocalStorage or SessionStorage.In the case of LocalStorage, you can use localStorage.getItem(key) to retrieve the value stored under a particular key. The method takes the key as an argument and returns the corresponding value associated with that key.

/*const value = localStorage.getItem("once more");
console.log(value);

console.log(typeof value);*/

// "Clear Local Storage"

//-The clear() method is a built-in method in JavaScript that is used to remove all the key-value pairs stored in LocalStorage. When you invoke localStorage.clear(), it clears all the data stored in the LocalStorage object, effectively deleting all the items stored.


/*localStorage.setItem("movement", "pushup");
localStorage.setItem("once more", 50);

localStorage.clear();  //-The clear() method is a built-in method in JavaScript that is used to remove all the key-value pairs stored in LocalStorage. When you invoke localStorage.clear(), it clears all the data stored in the LocalStorage object, effectively deleting all the items stored.*/

//-"If the queried value does not exist in LocalStorage, the getItem() method returns null."

//localStorage.setItem("movement", "pushup");

/*if (localStorage.getItem("sport") === null) {
    console.log("The queried value cannot be found")
}
else {
    console.log("The queried value has been found")
}*/

// "Local Storage- Write an Array"

//-"The value received in LocalStorage."

/*const todos = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("todos", todos)*/

//"A string value is coming."

/*const todos = ["Todo 1", "Todo 2", "Todo 3"];

console.log(localStorage.getItem("todos"));*/


// -"Converting to a string, similar to an array."

/*const todos = ["Todo 1", "Todo 2", "Todo 3"];

localStorage.setItem("todos", JSON.stringify(todos))*/

// -"In the console, each element will be converted into an array."

/*const todos = ["Todo 1", "Todo 2", "Todo 3"];

const value = JSON.parse(localStorage.getItem("todos"));

console.log(value);*/

//- This code listens to the submit event of a form. It retrieves the value entered by the user and stores it in the LocalStorage. Additionally, it prevents the page from being reloaded using event.preventDefault().

/*const form = document.getElementById("todo-form"); // to choose the form

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

}*/