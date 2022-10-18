const express = require("express");
const router = express.Router();

router.post("/destination/create", (req, res) =>
  res.send("Route for creating")
);

router.put("/destination/update", (req, res) => res.send("Route for updating"));

router.delete("/destination/delete/:id", (req, res) =>
  res.send("Route for deleting")
);

router.get("/destinations/", (req, res) => res.send("Route for getting all"));

router.get("/destination/:id", (req, res) =>
  res.send("Route for getting by id")
);

module.exports = router;
