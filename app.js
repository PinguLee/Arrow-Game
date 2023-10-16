const http = require('http');
const fs = require('fs');

const port = 8080;
const ContentTypeHTML = {
  'Content-Type': 'text/html'
};
const ContentTypeCSS = {
  'Content-Type': 'text/css'
};
const ContentTypeJavaScript = {
  'Content-Type': 'application/javascript'
};
let indexDoc, hardDoc;

fs.readFile("./index.html", (err, data) => {
  if (err) {
    console.error("Error");
  } else {
    indexDoc = data;
  }
});

fs.readFile("./hard.html", (err, data) => {
  if (err) {
    console.error("Error");
  } else {
    hardDoc = data;
  }
});

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, ContentTypeHTML);
    response.end(indexDoc);
  } else if (request.method === 'GET' && request.url === '/hard') {
    response.writeHead(200, ContentTypeHTML);
    response.end(hardDoc);
  } else if (request.url === '/css/style.css' && request.method === 'GET') {
    fs.readFile('./static/css/style.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      response.writeHead(200, ContentTypeCSS);
      response.end(data);
    });
  } else if (request.url === '/scripts/script.js' && request.method === 'GET') {
    fs.readFile('./static/scripts/script.js', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      response.writeHead(200, ContentTypeJavaScript);
      response.end(data);
    });
  } else {
    response.writeHead(404, ContentTypeHTML);
    response.end('404 ERROR');
  }
});

server.listen(8080, () => {
  console.log('서버 가동 중');
});