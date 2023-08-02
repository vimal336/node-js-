const math = require('./math')

const logEvents = require('./logEvents')

const EventEmittter = require('events');

class MyEmitter extends EventEmittter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
logEvents(msg);
});

myEmitter.emit('log','log event emitted');

