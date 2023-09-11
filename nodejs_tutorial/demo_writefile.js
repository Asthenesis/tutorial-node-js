var fs = require("fs");

fs.writeFile("mynewfile3.txt", "hello content", (error) => {
  if (error) throw error;
  console.log("saved!");
});
