const router = require("express").Router();
const {
  addTicket,
  getTickets,
  updateTicket,
  deleteTicket,
} = require("./ticketHandler");

const {
  userCreateValidation,
  userLoginValidation,
} = require("../validations/inputValidation");
const { login, register } = require("./empHandler");
const authorization = require("../helpers/authorization");

//user routes
router.post("/login", userLoginValidation, login);
router.post("/register", userCreateValidation, register);

//Ticket routes
router.post("/addTicket", authorization, addTicket);
router.get("/getTickets", authorization, getTickets);
router.put("/updateTicket", authorization, updateTicket);
router.delete("/deleteTicket", authorization, deleteTicket);

module.exports = router;
