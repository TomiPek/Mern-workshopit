var http = require("http");

//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/"){

      response.write("<h1>Ollaan alkuperäisellä sivulla<h1>");
  }
  else if (request.url ==="/homepage"){
  response.write("<h1>Kotisivu<h1>");
  }
  else if (request.url ==="/toinensivu"){
      response.write("<h3>Täällä on toinen sivu<h3>");
  }

    response.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8081