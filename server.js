
// read a file
const fs = require('fs')
const path = require('path')

//import { readFile } from 'node:fs';

fs.readFile((path.join(__dirname,'files','hello.txt')), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//Exit on uncaught errors 
process.on('uncaughtException', err => {
console.error(`There was an uncaught error: ${err}`)
process.exit(1);
})