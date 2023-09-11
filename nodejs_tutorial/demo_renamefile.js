var fs = require("fs");

fs.rename("mynewfile3.txt", "myfile2.txt", (err) => {
  if (err) throw err;
  console.log("file renamed!");
});
