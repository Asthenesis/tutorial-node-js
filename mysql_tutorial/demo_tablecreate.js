var mysql = require("mysql");

var con = mysql.createConnection({
  port: 3307,
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  var sql = "CREATE TABLE customers (name VARCHAR (255), address VARCHAR(255))";
  con.query(sql, (err, result) => {
    console.log("table created");
  });
});
