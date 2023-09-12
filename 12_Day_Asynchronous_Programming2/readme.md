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
    <title>JavaScript in 30 days</title>
    <!--<style>
        div {
            margin-top: 1000px;
            margin-left: 2000px;
        }
    </style>-->
</head>

<body>

    <script src="index.js"></script>
</body>

</html>

```

- Open exapmle text and employees json file
## Asynchronous Programming - Part 2 - ES6 - Promise, Fetch

##### Promise Structure and Chain
```js
// employees.json
[
    {
        "name": "John",
        "age": 40,
        "salary": 25000
    },
    {
        "name": "Jahn",
        "age": 50,
        "salary": 45000
    },
    {
        "name": "Jehn",
        "age": 60,
        "salary": 35000
    }
]
```


```js
// exapmle.txt
(this is a text file)
```


```js
// index.js
function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("positive result")
        }, 5000)
    })


}
console.log(getData("hello"));
```

```js
// index.js
function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("negetive result")
        }, 5000)
    })


}
console.log(getData("hello"));
```


```js
// index.js
function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("positive result")
        }, 5000)
    })


}
getData("hello").then(function (response) {
    console.log(response)
}) // 5 seconds later positive result
```



```js
// index.js
function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("negative result")
        }, 5000)
    })


}
getData("hello").catch(function (err) {
    console.log(err)
}) // 5 seconds later negative result
```



```js
// index.js
function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof data == "string") {
                //positive
                resolve(data)
            }
            else {
                //negative
                reject("please enter a string value")
            }
        }, 5000)
    })


}
getData(24).then(function () {
    console.log("incoming value" + response);
}).catch(function (err) {
    console.log(err)
}) // After 5 seconds please enter a string of values
```


```js
// index.js
function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof data == "string") {
                //positive
                resolve(data)
            }
            else {
                //negative
            reject(new Error("please enter a string value"))
            }
        }, 5000)
    })


}
getData(24)
    .then(response => console.log("incoming value" + response))
    .catch(err => console.log(err)); //Error: please enter a string value at
```

```js
function addTwo(number) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            }
            else {
                reject(new Error("please enter a number"))
            }
        }, 3000)
    })
}
addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2;
    }).then(response2 => console.log(response2))
    .catch(err => console.log(err)) // 12 14
// 1 catch but more then bride

```

## use of fetch


```js
function getTextFile() { //text file

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getTextFile(); // This is a text file

```


```js
function getTextFile() {

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getJsonFile() { //get data from a local json file
    fetch("example.json")
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

getJsonFile();

```

```js
function getTextFile() {

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getJsonFile() { //get data from a local json file
    fetch("example.json")
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getJsonFile(); //ƒ json() { [native code] }

```


```js
function getTextFile() {

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

//https://api.exchangerate.host/latest
function getJsonFile() { //get data from a local json file
    fetch("example.json")
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getExternalAPI() {
    fetch("https://api.exchangerate.host/latest")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

getExternalAPI();

```

```js
function getJsonFile() { //get data from a local json file
    fetch("example.json")
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getExternalAPI() {
    fetch("https://api.exchangerate.host/latest")
        .then(response => response.json())
        .then(data => {
            console.log(data.rates.TRY)
        })
        .catch(err => console.log(err)) //We see how many TL in 1 euro
}

getExternalAPI();
```
#### HTTP Requests with Fetch and Promise - GET
```js
class Request {
    get(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log( data))
            .catch(err => console.log(err))
    }
}


//https://jsonplaceholder.typicode.com/albums

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")

```

```js
class Request {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }
}


//https://jsonplaceholder.typicode.com/albums

const request = new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => {
        console.log(albums);
    })
    .catch(err => console.log(err));

```

#### HTTP Requests with Fetch and Promise - POST

```js
//https://jsonplaceholder.typicode.com/albums

class Request {
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "aaa" })
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err))

```

#### HTTP Requests with Fetch and Promise - PUT and DELETE

```js

class Request {
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })


    }
    delete(url) {
        return new Promise((resolve, project) => {
            fetch("https://jsonplaceholder.typicode.com/albums/10", {
                method: "DELETE"
            }).then(response => resolve("data processing successful"))
                .catch(err => reject(err))
        })
    }


}
const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/10", { userId: 10, title: "aaa" })
    .then(message=> console.log(message))
    .catch(err => console.log(err))

```