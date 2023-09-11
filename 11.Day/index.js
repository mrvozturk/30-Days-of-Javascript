//SECTION - asynchronous programming Ajax,Callback Pre-ES6 Part 1

//SECTION - Ajax and JSON ?
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



//SECTION - Ajax and text file operations

/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    console.log(xhr);
})*/

/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onreadystatechange = function () {
        console.log(this.readyState);

    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // 1 2 3 4
})*/


/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onreadystatechange = function () {
console.log(this.status)
    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // 0 200
})*/


/*document.getElementById("button").addEventListener("click", function () {
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
})*/

// it will only run when the response is ready

/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

   xhr.onload=function(){
    console.log(this.readyState);
   }
    xhr.open("GET", "example.txt", true);

    xhr.send();
}) // 4*/


/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
    }
    xhr.open("GET", "example.txt", true);

    xhr.send(); // this is a text file
}) */


/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onprogress=function(){
        console.log("process is being processed...",this.readyState)
    }
    xhr.open("GET", "example.txt", true);

    xhr.send();
}) // process is being processed... 3*/

/*document.getElementById("button").addEventListener("click", function () {
    //XMLHttpRequest
    const xhr = new XMLHttpRequest(); //xhr is short for XMLHttpRequest.

    xhr.onload = function () {
        if (this.status === 200) {
document.getElementById("ajax").textContent=this.responseText        }
    }
    xhr.open("GET", "example.txt", true);

    xhr.send();
}) */


/*document.getElementById("ajax").addEventListener("click", getAllEmployees)

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
}*/

/*document.getElementById("ajax").addEventListener("click", getAllEmployees)

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
}*/

//SECTION - working with ajax and an external api

/*document.getElementById("change").addEventListener("click", change);

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
}   */

//SECTION - SetTimeout and SetInterval Functions


// Set Timeout

/*setTimeout(function(){
console.log("hello")
},2000)*/


// Set Interval
/*let i = 0;

let value = setInterval(function () {
    i++;
    console.log("number:", i)
}, 1000);

document.getElementById("button").addEventListener("click", function () {
    clearInterval(value);
}) // Clear Interval*/

//SECTION - Understanding callback functions

/*document.getElementById("button").addEventListener("click", function () {
    console.log("click");
})*/


/*function process1(callback) {
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


process1(process2);*/

/*const langs = ["Python", "Java", "C++"];

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
addLang("JavaScript",getAllLangs); // asynchronous state*/

//SECTION -  Arrow Function ,Bind and This Relationship

/*const person = {
    age: 25,

    tellAge: function () {
        console.log(this)  // shows this person

        console.log(this.age)

    }.bind(this)
    // this-Window
}
person.tellAge();*/


/*const person={
    age:25,
    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }


}

person.tellAge();*/

//SECTION - Http Requests with Ajax - GET

// Ajax,callback,http requests

/*class Request {
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


*/

//SECTION - Http Requests with Ajax - POST

/*class Request {
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
})*/

//SECTION -  Ajax ile Http Requestleri - PUT


/*class Request {
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
})*/


//SECTION - Http Requests with Ajax - DELETE


/*class Request {
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
});*/



