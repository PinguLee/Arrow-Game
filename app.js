const fs = require('fs');
const http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })

  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.error("Error");
    } else {
      response.end(data);
    }
  });
}).listen(8080);