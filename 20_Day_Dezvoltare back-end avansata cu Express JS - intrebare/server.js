const express = require("express");
const dotenv = require("./config/env/node_modules/dotenv/lib/main");

// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello Question Answer Api Updated");
});

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});
