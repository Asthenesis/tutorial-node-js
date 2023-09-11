const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crud-db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection established!");
} catch (error) {
  console.log("Cant connect: ", error);
}
