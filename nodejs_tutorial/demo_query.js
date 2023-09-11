var http = require('http');
var url = require('url');

http.createServer( (req,rest) => {
    rest.writeHead(200, {'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    rest.end(txt);
}).listen(8080);