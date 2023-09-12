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