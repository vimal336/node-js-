
const http = require('http');

//Create server
// content type plain text

const server = http.createServer((req, res)=>{
res.writeHead(200, { "content-type": "text/plain"});
res.end("Hello backend is working")
});

// content type json
const server2 = http.createServer((req, res)=>{
res.writeHead(200, { "content-type": "application/json"});
res.end(`{"name":"vimal"}`)
});


// Server with route
const server3 = http.createServer((req, res)=>{

 if(req.url == "/"){
res.writeHead(200, { "content-type": "application/json"});
res.end(`{"name":"vimal"}`)
 } else if(req.url == "/about"){
res.writeHead(200, { "content-type": "application/json"});
res.end(`{"name":"vimal"}`)
 }  
});

// Start a server listening for connections.
server.listen(5000, ()=>{
    console.log("server listening on http://localhost:5000")
})




