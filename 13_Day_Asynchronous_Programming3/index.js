//SECTION - Asynchronous Programming - Part 3- ES7 - Async and Await

//SECTION - Using Async, Await and Relationship to Promises
// Async
/*async function test(data) {
    //Promise retrun new Promise

    return data;
}
test("hello").then(response => console.log(response))*/

// async functions simplify working with asynchronous code by ensuring that the function returns a Promise. This enables us to use the await keyword inside the function, making it easier to write and read asynchronous code. Additionally, the result of the async function can be captured using .then or using the await keyword in the calling code.

// Await

/*async function test(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it is a value")
        }, 5000)
    })
    let response = await promise;

    console.log(response)
    console.log("hello")
}


test("hello").then(response => console.log(response))*/

/*async function test(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it is a value");
        }, 5000)
    })
    let response = await promise;

    console.log(response);

    console.log("hello")
}

test("hello");*/

//The test function runs asynchronously and creates a Promise with a 5-second delay using setTimeout. The await keyword waits for this Promise to be resolved and stores the result in the response variable. Then, it logs "it is a value" and "hello" messages to the console.Later, the test("hello") call invokes the test function and sends the value "hello". The result of the function is captured using the .then method and logs the "it is a value" message to the console.

/*async function test(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it is a value")
        }, 5000)
    })
    let response = await promise;

    return response

}

test("hello").then(response => console.log((response))) // after 5 seconds it is a value*/

/*async function testData(data) {
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
    .catch(err => console.log(err))*/


/*async function getCurrency(url) {
    const response = await fetch(url);

    const data = (await response.json())

    console.log(data)
}

getCurrency("https://api.exchangerate.host/latest")//The getCurrency function fetches currency exchange rates from the specified URL and logs this  */

/*async function getCurrency(url) {
    const response = await fetch(url); // response object

    const data = (await response.json())// json object

    return data;
}

getCurrency("https://api.exchangerate.host/latest")
    .then(response => console.log(response)) // {motd: {…}, success: true, base: 'EUR', date: '2023-07-24', rates: {…}}*/


