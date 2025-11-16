
const http = require('http');

const fs = require('fs');

//Create server
// content type plain text

// const server = http.createServer((req, res)=>{
// res.writeHead(200, { "content-type": "text/plain"});
// res.end("Hello backend is working")
// });

// content type json
// const server2 = http.createServer((req, res)=>{
// res.writeHead(200, { "content-type": "application/json"});
// res.end(`{"name":"vimal"}`)
// });


// Server with route
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(`{"name":"Home page"}`)
    } else if (req.url == "/about") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(`{"name":"About Page"}`)
    }
    else if (req.url == "/files") {
        const readStream = fs.createReadStream("./sample.mp4")
        res.writeHead(200, { "content-type": "video/mp4" });
        readStream.pipe(res);
    } else {
        res.writeHead(404, { "content-type": "plain" });
        res.end(`{"name":"404 Pages Not found"}`)
    }
});

// Start a server listening for connections.
server.listen(5000, () => {
    console.log("server listening on http://localhost:5000")
})




