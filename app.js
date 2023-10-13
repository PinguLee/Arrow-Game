const fs = require('fs');
const http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })


}).listen(8080);