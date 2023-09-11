const express = require("express");
//const {accessControl}=require("./middleware");
const users = [
    { id: 1, name: "Merve Öztürk", place: "Budapeşte" },
    { id: 1, name: "Yoda Öztürk", place: "Budapeşte" }
];

const app = express();

const PORT = 5000;

//app.use(accessControl);//scope of application
/*app.get("/users",accessControl, (req,res,next)=>{
res.json(users);

});*/
// Get request
// localhost:5000/users
/*app.get("/products",accessControl, (req,res,next)=>{
    res.send("products");
    
    });*/
app.get("/users", (req, res, next) => {
    res.json({
        success:true,
        data:users
    })

});

app.post("/users", (req, res, next) => {
    res.json({
        success: true,
        data: "Post Request"
    })

});
app.put("/users", (req, res, next) => {
    res.json({
        success: true,
        data: "Put Request"
    })

});
app.delete("/users", (req, res, next) => {
    res.json({
        success: true,
        data: "Delete Request"
    })

});

app.listen(PORT, () => {
    console.log("Server Started PORT:" + PORT);
})