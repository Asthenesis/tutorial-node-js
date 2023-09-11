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
  con.query(
    "SELECT * FROM customers WHERE address LIKE 'S%'",
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
});
