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
    <h3 id="h3">Global scope</h3>
    <script src="index.js"></script>
</body>

</html>
```
## Babel and Webpack 
-  After installing package.json node modules and babelrc, we open src file and create app1.js,app2.js and index.js,webpack config.js files
#### Using Webpack in Projects
```js
//app1.js
export class Person {
    static Test() {
        console.log("Perso: static test")
    }
}

```

```js
// app2.js
export class Employee{
    static Test(){
        console.log( "Employee: static test")
    }
}
```


```js
// index.js
import { Person } from "./app1";

import { Employee } from "./app2";

Person.Test();
Employee.Test();
```

```js
// wedpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["@babel/polyfill","./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
    },
    mode: "development",
    
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ["@babel/preset-env"]
                }
              }
            }
          ]
    }
};
```