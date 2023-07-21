const path = require('path')
const fsPromises = require('fs').promises

const FileOps = async = async () =>{

try {

    const data = await fsPromises.readFile(path.join(__dirname,'files','hello.txt'), 'utf8')
        console.log(data)
    await fsPromises.writeFile(path.join(__dirname,'files','write.txt'), 'this is node js write file method')
        console.log('Write complete')

} catch(err) {

console.error(err)

}

    
}

FileOps()