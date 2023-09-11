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
  var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
