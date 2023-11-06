const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  console.log("this is home ");
  res.end("<h1>Helllo</h1>");
});

router.use("/api", require("./api/index"));

module.exports = router;
