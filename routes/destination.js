const express = require("express");
const router = express.Router();

router.post("/destination/create", () => res.send("Route for creating"));

module.exports = router;
