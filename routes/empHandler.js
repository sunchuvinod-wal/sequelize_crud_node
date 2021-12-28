const EmpController = require("../controllers/empController");
const customResponse = require("../helpers/customResponse");
const sendErrorResponse = require("../helpers/sendErrorResponse");
const bcrypt = require("bcrypt");

async function register(req, res) {
  try {
    const data = {
      empname: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    };
    const result = await EmpController.register(data, res);
    customResponse(200, result, res);
  } catch (error) {
    sendErrorResponse(error, res);
  }
}

async function login(req, res) {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await EmpController.login(data, res);
    customResponse(200, result, res);
  } catch (error) {
    sendErrorResponse(error, res);
  }
}

module.exports = {
  login,
  register,
};
