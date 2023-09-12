<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">
   
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small> September, 2023</small>
</sub>
</div>

[<< Day 2](../readMe.md) | [Day 3 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>JavaScript in 30 days</title>
    <!--<style>
        div {
            margin-top: 1000px;
            margin-left: 2000px;
        }
    </style>-->
</head>

<body>

    <!--
<div id="ajax">

    </div>
    <h3 id="h3">Ajax Usage?</h3>
    <button id="button">Perform ajax action</button>
   -->
    <!--<div class="container">
        <hr>
        <button id="ajax" class="btn btn-danger">Bring the employees</button>
        <hr>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Salary</th>

                </tr>
            </thead>
            <tbody id="employees">
                <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>
        </table>

    </div>-->

    <!--<div class="container">
        <hr>
        <label for="amount">Euro</label>
        <input type="number" id="amount" min="0">
        <hr>
        <button id="change" class="btn btn-danger">Convert</button>
        <hr>
        <label for="tl">TL</label>
        <input type="text" id="tl" readonly>

    </div>-->

    <!--<button id="button">Stop</button>-->

    <button id="button">click</button>

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
#### Asynchronous programming Ajax,Callback Pre-ES6 Part 1s

-  Open exapmle text and employees json file
```js
[
    {
        "name": "John Wick",
        "department": "İnformatics",
        "salary": "20000"
    },
    {
        "name": "John Jack",
        "department": "İnformatics",
        "salary": "25000"
    },
    {
        "name": "John Black",
        "department": "İnformatics",
        "salary": "30000"
    }
]
```
## Ajax and JSON ?
// Http  Status
// 200:OK
// 403:Forbidden
// 404:Not Found
// 505:Internal Server Error
//Holds the status of the XMLHttpRequest.
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready


// new XMLHttpRequest(): Creates a new XMLHttpRequest object.
// abort(): Cancels the current request.
// getAllResponseHeaders(): Retrieves the response headers and returns them as a string.
// getResponseHeader(): Retrieves a specific response header and returns its value.
// open(method, url, async, user, psw): Configures the request and prepares to connect to the specified server and file.
// method: The request type (GET or POST).
// url: The location of the file (server address).
// async: Specifies true (asynchronous) or false (synchronous).
// user: An optional user name.
// psw: An optional password.
// send(): Sends the request to the server. Used for GET requests.
// send(string): Sends the request to the server. Used for POST requests and takes a string parameter to send data.
// setRequestHeader(): Adds a label/value pair to the header of the specified request. It is used to add extra information to transmitted data. The header is added in the format of label and value.

// Ajax (Asynchronous JavaScript and XML) is a technology used to perform asynchronous data exchange on web pages, enabling faster and more interactive user experiences.JSON (JavaScript Object Notation) is a lightweight and readable data format used for data exchange. It represents data in key-value pairs and is commonly used, especially in conjunction with Ajax, for data exchange.


```js
(this is a text file)
```
## Ajax and text file operations

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    console.log(xhr);
})
```

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onreadystatechange = function () {
        console.log(this.readyState);

    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // 1 2 3 4
})
```

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onreadystatechange = function () {
console.log(this.status)
    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // 0 200
})
```

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            //response ready
            console.log(this.responseText)
        }
    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // this is a text file
})
```
- it will only run when the response is ready

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

   xhr.onload=function(){
    console.log(this.readyState);
   }
    xhr.open("GET", "example.txt", true);

    xhr.send();
}) // 4
```

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // this is a text file
})
```


```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onprogress=function(){
        console.log("process is being processed...",this.readyState)
    }
    xhr.open("GET", "example.txt", true);

    xhr.send();
}) // process is being processed... 3

```

```js
document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onload = function () {
        if (this.status === 200) {
document.getElementById("ajax").textContent=this.responseText        }
    }
    xhr.open("GET", "example.txt", true);

    xhr.send();
})
```

```js
document.getElementById("ajax").addEventListener("click", getAllEmployees)

function getAllEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true)

    xhr.onload = function () {

      let list = document.getElementById("employees")
        if (this.status == 200) {
            console.log(this.responseText)
        }
    }
    xhr.send();
}
```

```js
document.getElementById("ajax").addEventListener("click", getAllEmployees)

function getAllEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true)

    xhr.onload = function () {

        let list = document.getElementById("employees")
        if (this.status == 200) {
            const employees = JSON.parse(this.responseText);

            employees.forEach(function (employee) {
                list.innerHTML+=`<tr>
                <td>${employee.name} </td>
                <td>${employee.department} </td>
                <td>${employee.salary} </td>
              </tr> `
            })

        }
    }
    xhr.send();
}
```

## working with ajax and an external api

```js
document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangerate.host/latest");

    xhr.onload = function () {
        if (this.status) {
            const response = JSON.parse(this.responseText)

            const rate = response.rates.TRY
            const amount = (document.getElementById("amount").value)
            document.getElementById("tl").value = amount * rate
        }
    }
    xhr.send()
} 
```

## SetTimeout and SetInterval Functions

```js
// Set Timeout

/setTimeout(function(){
console.log("hello")
},2000)

```

```js
// Set Interval
let i = 0;

let value = setInterval(function () {
    i++;
    console.log("number:", i)
}, 1000);

document.getElementById("button").addEventListener("click", function () {
    clearInterval(value);
}) // Clear Interval
```
##  Understanding callback functions

```js
document.getElementById("button").addEventListener("click", function () {
    console.log("click");
})
```

```js
function process1(callback) {
    setTimeout(function () {
        console.log("Process 1")
        callback();
    }, 3000)
}

function process2() {
    setTimeout(function(){
        console.log("Process 2");
    },2000)

}


process1(process2);
```

```js
const langs = ["Python", "Java", "C++"];

function addLang(lang, callback) {

    setTimeout(function () {
        langs.push(lang);
        console.log("added");
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang)
        })
    }, 1000)
}
addLang("JavaScript",getAllLangs); // asynchronous state
```

##  Arrow Function ,Bind and This Relationship

```js
const person = {
    age: 25,

    tellAge: function () {
        console.log(this)  // shows this person

        console.log(this.age)

    }.bind(this)
    // this-Window
}
person.tellAge();
```

```js
const person={
    age:25,
    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }


}

person.tellAge();
```
## Http Requests with Ajax - GET

```js
// Ajax,callback,http requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("any error occurred...", null);
            }
        };

        this.xhr.send();
    }
}

const request = new Request();

```
##  Http Requests with Ajax - POST

```js
// Ajax,callback,http requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Get Request- Any error occurred...", null);
            }
        };

       this.xhr.send();
    }
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON data sent
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Post Request-Something went wrong", null);
            }
        }
        this.xhr.send(JSON.stringify(data));

    }
}

const request = new Request();


request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "Thriller" }, function (err, album) {
    if (err === null) {
        console.log(album);
    }
    //error
    else {
        console.log(err);
    }
})
```
 
 ## Ajax ile Http Requestleri - PUT

```js
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Get Request- Any error occurred...", null);
            }
        };

        this.xhr.send();
    }
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON data sent
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Post Request-Something went wrong", null);
            }
        }
        this.xhr.send(JSON.stringify(data));

    }
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON data sent
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Put Request-Something went wrong", null);
            }
        }
        this.xhr.send(JSON.stringify(data));

    }
  
}

const request = new Request();


request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 143, title: "Bizzey Mixed" }, function (err, album) {
    if (err === null) {
        console.log(album);
    }
    //error
    else {
        console.log(err);
    }
})
```


## Http Requests with Ajax - DELETE

```js
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Get Request- Any error occurred...", null);
            }
        };

        this.xhr.send();
    }
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON data sent
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Post Request-Something went wrong", null);
            }
        }
        this.xhr.send(JSON.stringify(data));

    }
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON data sent
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Put Request-Something went wrong", null);
            }
        }
        this.xhr.send(JSON.stringify(data));

    }
    delete(url, callback) {
        this.xhr.open("DELETE", url);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Delete Request- Data deletion successful...", null);
            }
        };

        this.xhr.send();
    }
  
}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10", function (err, response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});

```