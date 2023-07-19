
// read a file
import { readFile } from 'node:fs';

readFile('files/hello.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
