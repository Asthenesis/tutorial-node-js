var fs = require("fs");
var rs = fs.createReadStream("./demofile.txt");

rs.on("open", () => {
  console.log("the file is open");
});
