const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/polling_system_api");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connneting the mongo db"));

db.once("open", function () {
  console.log(" Successfully connected to mongodb");
});

module.exports = db;
