var http = require("http");

//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<h1>Hello world<h1>"); //write a response to the client


    response.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8081