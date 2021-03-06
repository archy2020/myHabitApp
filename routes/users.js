const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");

router.post("/create_habit", usersController.create_habit);
router.get("/update/:id&:newstatus", usersController.update);
router.get("/find", usersController.find);
router.get("/delete_habit", usersController.delete_habit);

module.exports = router;
