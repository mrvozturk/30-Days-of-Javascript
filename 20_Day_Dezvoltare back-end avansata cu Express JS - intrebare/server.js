const express = require("express");

const app = express();

const PORT = 5000 || process.env.Port;

app.get("/",(req,res)=>{
    res.send("Hello Question Answer Api Updated")
});
app.listen(PORT, () => {
    console.log(`App Started on ${PORT}`);
})