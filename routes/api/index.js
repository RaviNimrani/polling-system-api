const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.end("<h1>finallly</h1>");
});

// this is the entry point of all the api/v1 named url's
router.use("/v1", require("./v1/index"));

module.exports = router;
