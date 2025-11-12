console.log("node js practice");


// to get file system
const fs = require("fs");



// Write text file(Synchronous)

// fs.writeFileSync("test.txt", "hello node.js 2025");

// Write text file(Synchronous) in particular location

// fs.writeFileSync("../intro/test.txt", "hello node.js 2025");

// console.log("file written")


//Read file(Synchronous) without encoding

const data = fs.readFileSync('test.txt');
console.log("Read synchronously", data)

//Read file(Synchronous) with encoding

// const encodeddata = fs.readFileSync('test.txt', { encoding: "utf-8"});
// console.log("Read synchronously", encodeddata)


// Write text file(ASynchronous)

fs.writeFile("asyncTest.txt", "async file from nodejs", (err)=>{
    if(err) throw err
    console.log("async file created")

    // Read file (ASynchronous)
    fs.readFile("asyncTest.txt",{ encoding : "utf-8"}, (err, data) =>{
        console.log("Read file Async", data)
    } )
})

console.log("async file creating")


