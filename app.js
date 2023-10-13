const fs = require('fs');
const http = require("http");

const contentType = {
  'Content-Type': 'text/html',
  'charset': 'utf-8'
};

http.createServer((request, response) => {

  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, contentType);
    response.end(data);
  } else {

  }

  fs.readFile("./index.html", (err, data) => {
  if (err) {
    console.error("Error");
  } else {

  }
});

});

server.listen(8080, () => {
  console.log('서버 가동 중');
});