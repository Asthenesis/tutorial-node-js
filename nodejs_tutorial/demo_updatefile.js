var fs = require("fs");

fs.appendFile("mynewfile1.txt", "Hi world 2!", (error) => {
  if (error) throw error;
  console.log("Updated!");
});
