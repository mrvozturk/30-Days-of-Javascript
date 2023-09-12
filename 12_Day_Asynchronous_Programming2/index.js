//SECTION - Asynchronous Programming - Part 2 - ES6 - Promise, Fetch

//SECTION -  Promise Structure and Chain

/*function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("positive result")
        }, 5000)
    })


}
console.log(getData("hello"));*/


/*function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("negetive result")
        }, 5000)
    })


}
console.log(getData("hello"));*/




/*function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("positive result")
        }, 5000)
    })


}
getData("hello").then(function (response) {
    console.log(response)
}) // 5 seconds later positive result*/



/*function getData(data) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("negative result")
        }, 5000)
    })


}
getData("hello").catch(function (err) {
    console.log(err)
}) // 5 seconds later negative result*/




/*function getData(data) {

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
}) // After 5 seconds please enter a string of values*/




/*function getData(data) {

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
    .catch(err => console.log(err)); //Error: please enter a string value at*/

/*function addTwo(number) {

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
// 1 catch but more then bride*/

//SECTION - use of fetch

/*function getTextFile() { //text file

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getTextFile(); // This is a text file*/

/*function getTextFile() {

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

getJsonFile();*/


/*function getTextFile() {

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

getJsonFile(); //ƒ json() { [native code] }*/

/*function getTextFile() {

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

getExternalAPI();*/


/*function getJsonFile() { //get data from a local json file
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

getExternalAPI();*/




//SECTION - HTTP Requests with Fetch and Promise - GET


/*class Request {
    get(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log( data))
            .catch(err => console.log(err))
    }
}


//https://jsonplaceholder.typicode.com/albums

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")*/


/*class Request {
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
    .catch(err => console.log(err));*/


//SECTION -  HTTP Requests with Fetch and Promise - POST


//https://jsonplaceholder.typicode.com/albums

/*class Request {
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
    .catch(err => console.log(err))*/

//SECTION - HTTP Requests with Fetch and Promise - PUT and DELETE


/*class Request {
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
    .catch(err => console.log(err))*/

