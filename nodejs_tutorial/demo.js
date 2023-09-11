var http = require("http");

//create server object
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);
