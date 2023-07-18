const math = require('./math')

const {add, sub, mul, div} = require('./math')

console.log(add(3,3))
console.log(sub(3,3))
console.log(mul(3,3))
console.log(div(3,3))


// //OS Methods:
// var os = require('os');

// console.log(os.uptime());
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.version());


// console.log(__dirname);

// console.log(__filename);

// read a file

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('hello.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'hello/txt'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


// const path = require('path');
// console.log(path.sep);// \

// console.log(path.basename(__filename));//index.js  
// console.log(path.dirname(__dirname));//D:\fabevy
// console.log(path.extname(__filename));//.js



