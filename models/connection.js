const mssql = require("mssql");
const Sequelize = require("sequelize");

const connection = new Sequelize("sequlize_db", "root", "root", {
  host: "localhost",
  port: 1433,
  dialect: "mssql",
});
connection
  .authenticate()
  .then(() => {
    console.log("connected to db..");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = connection;
