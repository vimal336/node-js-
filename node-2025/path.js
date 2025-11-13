const path = require("path");

const filePath = "node-js-/node-2025/path.js";

// to get last path of file

console.log("Basename:", path.basename(filePath));

// return directory name 

console.log("Directory name:", path.dirname(filePath));

// return extension name 

console.log("Directory name:", path.extname(filePath));

// To get The directory name of the current module. 
// This is the same as the path.dirname() of the __filename.
console.log(__dirname);


// To join path

console.log("Joined path", path.join(__dirname,"node-2025","test.txt"))


// syntax
console.log("Joined path", path.join(__dirname,"foldername","filename"));

