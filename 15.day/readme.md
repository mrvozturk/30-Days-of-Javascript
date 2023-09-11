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
-Creates a package.json file using the information entered as a result of the "npm init" process

- The "npm install" command reads the dependencies specified in your package.json file and stores these dependencies in a folder of your project named node_modules.

-index.js file opens

## Node and NPM

#### Node Package Manager (NPM) and Packages

```js

//- Example package usage:
const is = require("simple-is");

console.log(is.number(24)); // true

console.log(is.string(24)); // false

```
####  Creating Our Own Packages, Package.Json , Package Dependencies

```js
//NPM (Node Package Manager) is a package manager that contains ready-made code packages that JavaScript programmers and developers can easily integrate into their projects. These modules speed up the development process, often by reusing code written by others.

//npm install: Used to install packages. It installs the packages listed in the package.json file, which represent your project's dependencies.

//npm install [package-name]: Used to install a specific package. For example: npm install express.

//npm uninstall [package-name]: Used to uninstall a package. For example: npm uninstall lodash.

//npm update: Used to update your project's dependencies to their latest versions.

//npm outdated: Shows the packages that need updating.

//npm list:List your project's dependencies along with their versions.

//npm search [package-name]: Used to search for a specific package in the NPM registry. For example: npm search react.

//npm init: Helps you create a package.json file for your project. It prompts you to enter basic information about your project.

//npm run [script-name]: Executes commands specified in the "scripts" section of the package.json file. For example: npm run start.

//npm publish: Used to publish your own package to the NPM registry.

//npm config: Used to manage NPM configurations. For example: npm config set registry https://registry.npmjs.org.

//npm version: Used to increment or change your project's version.

// npm run name

// npm install simple-is

// npm install mongoose

// npm install nodemailer
```

#### Using git and githup

```js
// README.md

//git init

//git add .

// git commit -m "first commit"

//git remote add origin https://github.com/username/projectname.git

//git push -u origin master

//username for :' write mail'

//password for:'write password'

```