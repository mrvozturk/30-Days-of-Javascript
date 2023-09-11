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
##  Asynchronous Programming - Part 3- ES7 - Async and Await

#### Using Async, Await and Relationship to Promises

```js
// Async
async function test(data) {
    //Promise retrun new Promise

    return data;
}
test("hello").then(response => console.log(response))

```
- async functions simplify working with asynchronous code by ensuring that the function returns a Promise. This enables us to use the await keyword inside the function, making it easier to write and read asynchronous code. Additionally, the result of the async function can be captured using .then or using the await keyword in the calling code.


```js
// Await
async function test(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it is a value")
        }, 5000)
    })
    let response = await promise;

    console.log(response)
    console.log("hello")
}


test("hello").then(response => console.log(response))
```


```js
async function test(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it is a value");
        }, 5000)
    })
    let response = await promise;

    console.log(response);

    console.log("hello")
}

test("hello");
```

-The test function runs asynchronously and creates a Promise with a 5-second delay using setTimeout. The await keyword waits for this Promise to be resolved and stores the result in the response variable. Then, it logs "it is a value" and "hello" messages to the console.Later, the test("hello") call invokes the test function and sends the value "hello". The result of the function is captured using the .then method and logs the "it is a value" message to the console.

```js
async function test(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it is a value")
        }, 5000)
    })
    let response = await promise;

    return response

}

test("hello").then(response => console.log((response))) // after 5 seconds it is a value
```


```js
async function testData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data)
            }
            else {
                reject(new Error("please enter a string value"))
            }
        }, 5000)
    })
    const response = await promise

    return response;
}

testData("thriller").then(data => console.log(data)) // After 5 seconds, the word voltage appears on the console.
    .then(data => console.log(data))
    .catch(err => console.log(err))
```


```js
async function getCurrency(url) {
    const response = await fetch(url);

    const data = (await response.json())

    console.log(data)
}

getCurrency("https://api.exchangerate.host/latest")//The getCurrency function fetches currency exchange rates from the specified URL and logs this 

```


```js
async function getCurrency(url) {
    const response = await fetch(url); // response object

    const data = (await response.json())// json object

    return data;
}

getCurrency("https://api.exchangerate.host/latest")
    .then(response => console.log(response)) // {motd: {…}, success: true, base: 'EUR', date: '2023-07-24', rates: {…}}

```