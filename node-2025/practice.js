console.log("node js practice");


// to get file system
const fs = require("fs");



// create text file(Synchronous)
// fs.writeFileSync("test.txt", "hello node.js 2025");

// create text file in particular location
// fs.writeFileSync("../intro/test.txt", "hello node.js 2025");

// console.log("file written")

// Read file(Synchronous)
const data = fs.readFileSync('test.txt', { encoding: "utf-8"});
console.log("Read synchronously", data)