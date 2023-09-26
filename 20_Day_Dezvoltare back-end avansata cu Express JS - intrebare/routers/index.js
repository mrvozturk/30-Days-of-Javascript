const express = require("express");
const auth = require("./auth"); // Doğru sıra
const question = require("./question"); // Doğru sıra

// /api
const router = express.Router();

router.use("/questions", question);
router.use("/auth", auth);

module.exports = router;
