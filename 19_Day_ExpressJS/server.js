const express = require("express");
// const { accessControl } = require("./middleware"); // middleware henüz eklenmemiş
const users = [
    { id: 1, name: "Merve Öztürk", place: "Eskişehir" },
    { id: 2, name: "M.Ö", place: "Ankara" }
];

const app = express();

const PORT = 5000;

// app.use(accessControl); // middleware henüz eklenmemiş
app.use(express.json());

app.get("/users", (req, res, next) => {
    res.json({
        success: true,
        data: users
    });
});

app.post("/users", (req, res, next) => {
    const user = req.body;
    users.push(user);

    res.json({
        success: true,
        data: users
    });
});

app.put("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) { 
        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body
            };
        }
    }
    res.json({
        success: true,
        data: users
    });
});

app.delete("/users/:id", (req, res, next) => { // "/users/:id" endpoint'i eklenmeli
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1); // Kullanıcıyı diziden silmek için splice kullanılmalı
            break;
        }
    }
    res.json({
        success: true,
        data: users
    });
});

app.listen(PORT, () => {
    console.log("Server Started: " + PORT);
});
