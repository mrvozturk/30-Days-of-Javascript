<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">
  
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small>September, 2023</small>
</sub>
</div>

[<< Day 2](../readMe.md) | [Day 3 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title> Employees Project</title>
    <style>
        /* styles.css */

        /* General page styles */
        body {
            background-color: grey;
        }


        /* Çalışanlar kartı stilleri */
        .card {
            background-color: #fff;
            /* White background  */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }


        .card-header {
            background-color: #f5f5f5;
            /*  Light gray background */
        }

        .container {
            background-color: gray;
            /* For example, light blue color */
            padding: 20px;
            /* Adding padding to the content */
            border-radius: 10px;
            /* Rounded corners */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            /* Slight shadow */
        }


        /* Form styles */
        .form-control {
            border: 1px solid #ccc;
            border-radius: 3px;
        }


        /* Button styles */
        /* Transition effect for buttons */
        .btn {
            background-color: #d9534f;
            color: #fff;
            transition: background-color 0.3s, transform 0.3s;
        }

        .btn:hover {
            background-color: #c9302c;
            transform: scale(1.05);
        }
    </style>
</head>

<body>
    <div class="container" style="margin-top:20px;">

        <div class="card row">
            <div class="card-header">Employees Project</div>
            <div class="card-body">
                <form id="employee-form" name="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="name" id="name" placeholder="Employee Name">
                        </div>
                        <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="department" id="department"
                                placeholder="Department he works in">
                        </div>
                        <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="salary" id="salary" placeholder="Salary">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger">Add Employee</button>
                </form>
                <hr>
                <button id="update" class="btn btn-dark" style="display:none;">Update the employee</button>
                <hr>



            </div>

            <div class="card-body">
                <hr>
                <h5 class="card-title" id="employees-title">Employees</h5>

                <hr>
                <table class="table table-dark">
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Id</th>

                        </tr>
                    </thead>
                    <tbody id="employees">
                        <!-- <tr>
                                            
                                            <td>Merve Öztürk</td>
                                            <td>Informatics</td>
                                            <td>4000</td>
                                            <td>1</td>
                                            <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
                                            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
                                        </tr>
                                           -->
                    </tbody>
                </table>
                <hr>


            </div>
        </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>


    <script src="bundles/bundle.js"></script>
</body>

</html>
```
#### Fake-apiemployee
```js
{
  "employees": [
    {
      "name": "merve öztürk",
      "department": "bilişim",
      "salary": "3000",
      "id": 3
    },
    {
      "name": "Hüseyin Varis",
      "department": "bilişim",
      "salary": "0000",
      "id": 4
    },
    {
      "name": "merve",
      "department": "bilişim",
      "salary": 3000,
      "id": 5
    }
  ]
}
```
