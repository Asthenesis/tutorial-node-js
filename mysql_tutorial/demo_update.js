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
  var sql =
    "UPDATE customers SET address = 'Canyon Street 123' WHERE address ='Valley 345'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated!");
  });
});
