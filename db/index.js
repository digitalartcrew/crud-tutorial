const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    directConnection: true,
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.error("Datbase not connected: ", e));

const db = mongoose.connection;

module.exports = db;
