
//OS Methods:
var os = require('os');

console.log(os.uptime());
console.log(os.type());
console.log(os.homedir());
console.log(os.version());


console.log(__dirname);
console.log(__filename);


const path = require('path');
console.log(path.sep);

console.log(path.basename(__filename));
console.log(path.dirname(__dirname));
console.log(path.extname(__filename));
