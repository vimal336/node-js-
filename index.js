var os = require('os');
var path = require('path');

console.log(os.uptime());
console.log(os.type());
console.log(os.homedir());
console.log(os.version());
console.log(path.sep);
console.log(__dirname);
console.log(__filename);