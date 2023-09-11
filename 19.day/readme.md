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
    <h3 id="h3">Global scope</h3>
    <script src="index.js"></script>
</body>

</html>
```


```js
//server.js
const express = require("express");

const users=[
    {id:1,name:"Merve Öztürk",place:"Budapeşte"},
    {id:1,name:"Yoda Öztürk",place:"Budapeşte"}
];

const app = express();

const PORT = 5000;

app.get("/users",(req,res,next)=>{
res.json(users);

})
app.listen(PORT, () => {
    console.log("Server Started PORT:" + PORT);
})
```
-We are installing package.json node modules


```js
// package.json
{
  "name": "19.day",
  "version": "1.0.0",
  "description": "",
  "main": "\"server.js\"",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"nodemon server.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

```