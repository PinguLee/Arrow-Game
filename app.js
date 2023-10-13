const fs = require('fs');
const http = require("http");
const contentType = {
  'Content-Type': 'text/html',
  'charset': 'utf-8'
};

http.createServer(function (request, response) {
  response.writeHead(200, contentType);

  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.error("Error");
    } else {
      response.end(data);
    }
  });
}).listen(8080);