const db = require("../models/index");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class EmpController {
  static register = async (data, res) => {
    const result = await db.Emp.create(data);

    return result;
  };
  static login = async (data, res) => {
    const Emp = await db.Emp.findAll({ where: { email: data.email } });

    if (!Emp.length) {
      return new Error("Email does not exist");
    } else if (!(await bcrypt.compare(data.password, Emp[0].password))) {
      return new Error("password is incorrect");
    } else {
      const token = jwt.sign(
        {
          _id: Emp[0].id,
          email: Emp[0].email,
        },
        "secretkey",
        {
          algorithm: "HS256",
          expiresIn: "7d",
        }
      );

      return { token };
    }
  };
}
module.exports = EmpController;
