var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "password",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });