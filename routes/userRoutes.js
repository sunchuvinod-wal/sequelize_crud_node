const router = require("express").Router();
const userController = require("../controllers/userController");
const userValidation = require("../validations/inputValidation.js");
router.post("/addUser", userValidation, userController.addUser);
router.get("/getAllUsers", userController.getAllUsers);
router.put("/updateUser", userValidation, userController.updateUser);
router.delete("/deleteUser", userController.deleteUser);

module.exports = router;
