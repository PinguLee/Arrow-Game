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
let indexDoc, hardDoc, styleCSS, scriptJavaScript;


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

fs.readFile('./static/css/style.css', 'utf8', (err, data) => {
  if (err) {
    console.error("Error");
  } else {
    styleCSS = data;
  }
});

fs.readFile('./static/scripts/script.js', 'utf8', (err, data) => {
  if (err) {
    console.error("Error");
  } else {
    scriptJavaScript = data;
  }
});

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, ContentTypeHTML);
    response.end(indexDoc);
  } else if (request.method === 'GET' && request.url === '/hard.html') {
    response.writeHead(200, ContentTypeHTML);
    response.end(hardDoc);
  } else if (request.method === 'GET' && request.url === '/static/css/style.css') {
    response.writeHead(200, ContentTypeCSS);
    response.end(styleCSS);
  } else if (request.method === 'GET' && request.url === '/static/scripts/script.js') {
    response.writeHead(200, ContentTypeJavaScript);
    response.end(scriptJavaScript);
  } else {
    response.writeHead(404, ContentTypeHTML);
    response.end('404 ERROR');
  }
});

server.listen(8080, () => {
  console.log('서버 가동 중');
});