const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("Ei mittää");

      response.end();
    } else if (request.url === "/frontpage") {
      fs.readFile("frontpage.html", (err, data) => {
        if (err) {
          console.log("Tapahtui virhe!");
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      });
    } else if (request.url === "/contact") {
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          console.log("Tapahtui virhe!");
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      });
    } else if (request.url === "/plaintext") {
      fs.readFile("example.txt", (err, data) => {
        if (err) {
          console.log("Tapahtui virhe!");
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      });
    } else if (request.url === "/json") {
      response.writeHead(200, { "Content-Type": "application/json" });
      var data = fs.readFileSync("sampledata.json");
      response.write(data.toString());
    }
    response.end();
  })
  .listen(8000);
