const db = require("../models");
const UserModel = db.userModel;
class UserController {
  static addUser = async (req, res) => {
    const userDetails = await UserModel.build({
      name: req.body.name,
      email: req.body.email,
      workingAt: req.body.workingAt,
      address: req.body.address,
      phone: req.body.phone,
    });
    await userDetails.save();
    if (!userDetails) {
      return res.status(200).send({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).send({
      status: 200,
      message: "Data Save Successfully",
    });
  };
  catch(error) {
    console.log(error);
    return res.status(400).send({
      message: "Unable to insert data",
      errors: error,
      status: 400,
    });
  }
  static getAllUsers = async (req, res) => {
    const userDetails = await UserModel.findAll();
    if (!userDetails) {
      return res.status(200).send({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).send({
      status: 200,
      message: "Data find Successfully",
      data: userDetails,
    });
  };
  catch(error) {
    console.log(error);
    return res.status(400).send({
      message: "Unable to find data",
      errors: error,
      status: 400,
    });
  }
  static updateUser = async (req, res) => {
    const id = req.body.id;
    console.log(id);
    const userDetails = await UserModel.update(
      {
        name: req.body.name,
        email: req.body.email,
        workingAt: req.body.workingAt,
        address: req.body.address,
        phone: req.body.phone,
      },
      { where: { id: req.body.id } }
    );
    if (!userDetails) {
      return res.status(200).send({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).send({
      status: 200,
      message: "Data Update Successfully",
    });
  };
  catch(error) {
    console.log(error);
    return res.status(400).send({
      message: "Unable to update data",
      errors: error,
      status: 400,
    });
  }
  static deleteUser = async (req, res) => {
    const id = req.body.id;
    const userDetails = await UserModel.destroy({
      where: { id: id },
    });
    if (!userDetails) {
      return res.status(200).send({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).send({
      status: 200,
      message: "Data Delete Successfully",
    });
  };
  catch(error) {
    console.log(error);
    return res.status(400).send({
      message: "Unable to Delete data",
      errors: error,
      status: 400,
    });
  }
}
module.exports = UserController;
