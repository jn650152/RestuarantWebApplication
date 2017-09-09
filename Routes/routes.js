var express = require("express");
var router = express.Router();
var controller = require("../Controllers/controller.js");

router.post("/createReservation", controller.createReservation);
router.get("/searchAllReservations", controller.searchAllReservations);

//update
//delete
module.exports = router;

