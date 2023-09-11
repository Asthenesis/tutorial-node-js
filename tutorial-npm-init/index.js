const express = require("express");
const app = express();

// const mysql = require("mysql");

const db = require("./models");

const { User } = require("./models");

app.get("/select", (req, res) => {
  User.findAll({ where: { firstName: "John" } })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/insert", (req, res) => {
  User.create({
    firstName: "John",
    age: 20,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("insert");
});

app.get("/delete", (req, res) => {
  User.destroy({ where: { id: 4 } });
  res.send("delete");
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "FakeDatabase",
// });

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("server is running!");
  });
});
