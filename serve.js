const http = require('http')
const PORT = 3000

const server = http.createServer((req,res)=>{

res.write(' creating web server in node js ')
res.end()
})

server.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('server is running on ' + PORT)
    }
})