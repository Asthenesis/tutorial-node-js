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
  var adr = "Mountain 21";
  var name = "Amy";
  var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr); //1st method

  var sql2 = "SELECT * FROM customers WHERE address = ?"; //2nd method

  var sql3 = "SELECT * FROM customers WHERE name = ? OR address = ?"; //3rd method for multiple values

  //use only [adr] for address, if using [name, adr] it's indicating multiple values
  con.query(sql3, [name, adr], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
