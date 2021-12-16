const sequelize = require("./connection.js");
const Sequelize = require("sequelize");
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.userModel = require("./userModel")(sequelize, Sequelize);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("re sync is done..");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
