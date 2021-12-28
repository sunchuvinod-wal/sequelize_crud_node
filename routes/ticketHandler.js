const { func } = require("joi");
const TicketController = require("../controllers/ticketController");
const customResponse = require("../helpers/customResponse");
const sendErrorResponse = require("../helpers/sendErrorResponse");
const jwt = require("jsonwebtoken");
async function addTicket(req, res) {
  try {
    const data = {
      name: req.body.name,
      status: req.body.status,
      empId: req.user._id,
    };
    const result = await TicketController.addTicket(data, res);
    customResponse(201, result, res);
  } catch (error) {
    sendErrorResponse(error, res);
  }
}
async function getTickets(req, res) {
  try {
    const empid = req.user._id;
    const result = await TicketController.getTickets(empid, res);
    customResponse(200, result, res);
  } catch (error) {
    sendErrorResponse(error, res);
  }
}
async function updateTicket(req, res) {
  try {
    const id = req.body.id;
    const data = {
      status: req.body.status,
    };
    const result = await TicketController.updateTicket(id, data, res);
    customResponse(201, result, res);
  } catch (error) {
    sendErrorResponse(error, res);
  }
}
async function deleteTicket(req, res) {
  try {
    const id = parseInt(req.body.id);
    const result = await TicketController.deleteTicket(id, res);
    customResponse(201, result, res);
  } catch (error) {
    sendErrorResponse(error, res);
  }
}

module.exports = {
  addTicket,
  getTickets,
  updateTicket,
  deleteTicket,
};
