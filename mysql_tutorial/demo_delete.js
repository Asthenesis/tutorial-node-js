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
  var sql = "DELETE FROM customers WHERE id = 1";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
