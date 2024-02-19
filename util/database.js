const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Left$dead3", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
