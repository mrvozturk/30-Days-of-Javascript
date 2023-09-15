const express = require("express");
//const { accessControl } = require("./middleware")
const users = [
    { id: 1, name: "Merve Öztürk", place: "Eskişehir" },
    { id: 2, name: "M.Ö", place: "Ankara" }
];

const app = express();

const PORT = 5000;

//app.use(accessControl);

app.get("/users", (req, res, next) => {
    res.json(users);
})
app.post("./users",(req,res,next)=>{
    res.json({success:true,
    data:"Post req"})
})
app.listen(PORT, () => {
    console.log("Server Started: " + PORT)
})