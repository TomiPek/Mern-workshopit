const http = require('http');
const fs = require('fs');
//create a server object:
http.createServer((request, response)=>{
    if (request.url === "/"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write('Nothing here to see');
    } 
    
    else if (request.url === "/frontpage"){
        response.writeHead(200, {"Content-Type": "text/html"})
        var data = fs.readFileSync("frontpage.html")
        response.write(data.toString());
    } 
    
    else if (request.url === "/contact"){
        response.writeHead(200, {"Content-Type": "text/html"})
        var data = fs.readFileSync("contact.html")
        response.write(data.toString());
    } 
    
    else if (request.url === "/plaintext"){
        response.writeHead(200, {"Content-Type": "text/plain"})
        var data = fs.readFileSync("example.txt")
        response.write(data.toString());
    } 
    
    else if (request.url === "/json"){
        response.writeHead(200, {"Content-Type": "application/json"})
        var data = fs.readFileSync("sampledata.json");
        response.write(data.toString())
        
    }
    response.end()
}).listen(3000);

