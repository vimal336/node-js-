var http = require('http');
var dt = require('./dateModule')

http.createServer(function (req, res) {
  console.log('response send')
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The date and time is' +dt.myDateTime())
  res.end()
}).listen(8000);

//http://localhost:8080/

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

              