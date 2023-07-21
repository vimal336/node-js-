
const path = require('path')
const fs = require('fs')

const rs = fs.createReadStream(path.join(__dirname, 'files','hello.txt'),{encoding: 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname, 'files','newhello.txt'),{encoding: 'utf8'})
rs.pipe(ws)