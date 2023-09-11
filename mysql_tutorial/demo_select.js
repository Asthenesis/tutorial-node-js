var mysql = require("mysql");

var con = mysql.createConnection({
  port: 3307,
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

// con.connect((err) => {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });



//selecting columns

con.connect((err) => {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", (err, result, fields) => {
    if (err) throw err;
    console.log(fields[1].name);
  });
});
