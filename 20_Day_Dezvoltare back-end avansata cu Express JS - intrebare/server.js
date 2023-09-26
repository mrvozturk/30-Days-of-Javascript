const express = require("express");
const dotenv = require("./config/env/node_modules/dotenv/lib/main");
//const question = require("./routers/question");
//const auth = require("./routers/auth");
const rauters = require("./routers/index")

dotenv.config({
    path: "./config/env/config.env"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello Question Answer Api Updated");
});
// Express Router and Routers Configuration - 1

// Auth Router
//app.use("/auth", auth);
// Question Router
//app.use("/question", question);

//Express Router and Routers Configuration - 2
app.use("/api", rauters);

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});

//Using Postman