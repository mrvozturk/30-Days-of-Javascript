const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Question Home Page");
});
router.get("/register", (req, res) => {
    res.send("Question Delete Page");
});

module.exports = router;