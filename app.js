const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db");

app.get("/", (req, res) => {
  db.collection("destinations")
    .find()
    .toArray()
    .then((results) => res.send(results))
    .catch((e) => console.error("We have an error: ", e));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
