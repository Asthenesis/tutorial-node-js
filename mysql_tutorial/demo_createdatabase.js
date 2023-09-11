var mysql = require("mysql");

var con = mysql.createConnection({
  port: 3307,
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  con.query("CREATE DATABASE mydb", (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
});
