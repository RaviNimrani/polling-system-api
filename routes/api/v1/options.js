const express = require("express");
const router = express.Router();
const optionsController = require("../../../controllers/optionsController");

router.post("/:id/create", optionsController.create);
router.get("/:id/add_vote", optionsController.add_vote);
router.delete("/delete/:id", optionsController.delete);

module.exports = router;
