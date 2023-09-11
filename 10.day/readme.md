<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">
   
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Film Project</title>
</head>
<body>
        <div class="container" style ="margin-top:20px;">
                                     
                <div class="card row">
                    <div class="card-header">Movies</div>
                    <div class="card-body">
                            <form id = "film-form" name="form">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input class="form-control" type="text" name="title" id = "title" placeholder="Movie Name">
                                    </div>
                                    <div class="form-group col-md-6">
                                            <input class="form-control" type="text" name="director" id = "director" placeholder="Director">
                                    </div>
                                    <div class="form-group col-md-6">
                                            <input class="form-control" type="text" name="url" id = "url" placeholder="Movie Poster Link">
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-danger">Add movie</button>
                            </form>
                            <hr>
                            

                        
                     </div>
                 
                     <div class="card-body">
                            <hr>
                            <h5 class="card-title" id = "films-title">Films</h5>
        
                            <hr>
                            <table class="table table-dark">
                                    <thead>
                                      <tr>
                                        <th scope="col">Film Poster</th>
                                        <th scope="col">Film Name</th>
                                        <th scope="col">Director</th>
                                        
                                      </tr>
                                    </thead>
                                    <tbody id = "films">
                                        <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->
                                          <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->
                                    </tbody>
                                  </table>
                            <hr>  
                            <a id = "clear-films" class="btn btn-dark" href="#">Clear all movies</a>               
                        </div>
                      </div>
                
            </div>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            
            <script src="ui.js"></script>
            <script src="storage.js"></script>
            <script src= "film.js"></script>

            <script src="index.js"></script>

</body>
</html>
```

- Open 3 Javascript files (film.js-storage.js-ui.js)


```js
// index.js
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films");

// UI object initialization
const ui = new UI();

//generate storage object
const storage = new Storage();

//loading all events

eventListeners();


function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms)

}
function addFilm(event) {

    const title = titleElement.value;

    const director = directorElement.value;

    const url = urlElement.value

    if (title === "" || director === "" || url === "") {
        //mistake

        ui.displayMessages("fill in all fields", "danger")
    }
    else {
        //new film
        const newFilm = new Film(title, director, url)
        ui.addFilmToUI(newFilm);//add movies to interface
        storage.addFilmToStorage(newFilm)//add movies to storage
        ui.displayMessages("movie successfully added...", "success")
    }

    ui.clearInputs(titleElement, urlElement, directorElement)
    event.preventDefault()
}
function deleteFilm(event) {
    if (event.target.id === "delete-film") {
        ui.deleteFilmFromUI(event.target)
        storage.deleteFilmFromStorage(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("deletion successful...", "success");
    }
}
function clearAllFilms() {
    if (confirm("are you sure?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }

}
```


```js
// storage.js
function Storage() {

}

Storage.prototype.addFilmToStorage = function (newFilm) {
let films=this.getFilmsFromStorage();

    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films))
}
Storage.prototype.getFilmsFromStorage = function () {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage()

    films.forEach(function (film, index) {
        if (film.title === filmTitle) {
            films.splice(index, 1);
        }
    })
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem("films")
}
```


```js

// ui.js
function UI() {

}

UI.prototype.addFilmToUI = function (newFilm) {
    /* <tr>
                                             <td><img src="" class="img-fluid img-thumbnail"></td>
                                             <td></td>
                                             <td></td>
                                             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                           </tr>*/

    const filmList = document.getElementById("films");

    filmList.innerHTML += `<tr>
<td><img src="${newFilm.url} " class="img-fluid img-thumbnail"></td>
<td>${newFilm.title} </td>
<td>${newFilm.director} </td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`



}

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body")


    //create the alert div

    const div = document.createElement("div")

    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1000)

}
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
        filmList.innerHTML += `<tr>
        <td><img src="${film.url} " class="img-fluid img-thumbnail"></td>
        <td>${film.title} </td>
        <td>${film.director} </td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
    })
}
UI.prototype.deleteFilmFromUI = function (element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function () {
    const filmList = document.getElementById("films");

    //filmList.innerHTML="";

    while (filmList.firstElementChild !== null) {// as long as there is a child
        filmList.firstElementChild.remove();
    }


}

```


```js
//film.js

// Film Constructor

function Film(title, director, url) {
    this.title = title;
    this.director = director;
    this.url = url;
}

```




