const joi = require("joi");

const createValidation = joi.object({
  empname: joi.string().alphanum().trim(true).required(),
  email: joi.string().trim(true).required(),
  password: joi.string().min(3).max(15).required().label("Password"),
  password_confirmation: joi
    .any()
    .equal(joi.ref("password"))
    .required()
    .label("Confirm password")
    .options({ messages: { "any.only": "{{#label}} does not match" } }),
});

const userCreateValidation = async (req, res, next) => {
  const data = {
    empname: req.body.name,
    email: req.body.email,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation,
  };
  console.log(data);
  const { error } = createValidation.validate(data);
  if (error) {
    return res.status(400).send({ err: error.message });
  } else {
    next();
  }
};

const loginValidation = joi.object({
  email: joi.string().trim(true).required(),
  password: joi.string().min(3).max(15).required().label("Password"),
});
const userLoginValidation = async (req, res, next) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  const { error } = loginValidation.validate(data);
  if (error) {
    return res.status(400).send({ err: error.message });
  } else {
    next();
  }
};

module.exports = { userCreateValidation, userLoginValidation };
