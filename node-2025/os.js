const os = require('os');


//To get the operating system platform
console.log("platform", os.platform());

//To get the os CPU architecture 64 or 32 etc...
console.log("Architecture", os.arch());

//To get total amount of system memory in bytes as an integer
console.log("Total memory", Math.round(os.totalmem() / 1024 ** 3),'GB');

//To get free amount of system memory in bytes as an integer
console.log("Free memory", Math.round(os.freemem() / 1024 ** 3),'GB');

//To get free amount of system memory in bytes as an integer
console.log("Free memory", Math.round(os.freemem() / 1024 ** 3),'GB');

//To get Returns current user's home directory.
console.log("Home Directory", os.homedir());