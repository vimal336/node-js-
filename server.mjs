
// read a file
import { readFile } from 'node:fs';

readFile('files/hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//Exit on uncaught errors 
process.on('uncaughtException', err => {
console.error(`There was an uncaught error: ${err}`)
process.exit(1);
})