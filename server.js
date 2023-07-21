
//file system

const path = require('path')
const fs = require('fs')

//import { readFile } from 'node:fs';

// read a file
fs.readFile((path.join(__dirname,'files','hello.txt')), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// write a file 
fs.writeFile((path.join(__dirname,'files','write.txt')), 'create a file using node js', (err, data) => {
  if (err) throw err;
  console.log('Write complete');
});


// Modify file (e.g., append some text)
  
fs.appendFile((path.join(__dirname,'files','write.txt')), '\n\n mofify or update a file using node js', (err, data) => {
  if (err) throw err;
  console.log('update complete');
});

//rename a file
  fs.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','renaming.txt'), (err, data) => {
  if (err) throw err;
  console.log('rename complete');
});


//Exit on uncaught errors 
process.on('uncaughtException', err => {
console.error(`There was an uncaught error: ${err}`)
process.exit(1);
}) 