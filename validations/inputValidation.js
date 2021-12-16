const joi = require("joi");

const validation = joi.object({
  name: joi.string().alphanum().trim(true).required(),
  email: joi.string().alphanum().trim(true).required(),
  workingAt: joi.string().alphanum().trim(true).required(),
  address: joi.string().trim(true),
  phone: joi.string().trim(true),
});

const userValidation = async (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    workingAt: req.body.workingAt,
    address: req.body.address,
    phone: req.body.phone,
  };

  const { error } = validation.validate(data);
  if (error) {
    return res.status(400).send({ err: error.message });
  } else {
    next();
  }
};
module.exports = userValidation;
