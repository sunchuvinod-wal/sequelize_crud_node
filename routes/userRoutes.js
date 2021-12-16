const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/addUser", userController.addUser);
router.get("/getAllUsers", userController.getAllUsers);
router.put("/updateUser", userController.updateUser);
router.delete("/deleteUser", userController.deleteUser);

module.exports = router;
