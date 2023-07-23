var http = require('http');

http.createServer(function (req, res) {
  console.log('response send')
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

//http://localhost:8080/