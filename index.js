const express = require("express");
const port = 8000;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));
const db = require("./config/mongoose");

app.listen(port, function (err) {
  if (err) {
    console.log("error while loading", err);
  }
  console.log("successFully Connected");
});
