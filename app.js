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

const server = http.createServer((request, response) => {
  function fsRead(link) {
    fs.readFile(link, 'utf-8', (err, data) => {
      if (err) {
        console.error("Error");
      } else {
        return data;
      }
    });
  }
  if (request.method === 'GET' && request.url === '/') {
    let data = fsRead('./index.html');
    response.writeHead(200, ContentTypeHTML);
    response.end(data);
  } else if (request.method === 'GET' && request.url === '/hard') {
    let data = fsRead('./hard.html');
    response.writeHead(200, ContentTypeHTML);
    response.end(data);
  } else if (request.method === 'GET' && request.url === '/static/css/style.css') {
    let data = fsRead('./static/css/style.css').
    response.writeHead(200, ContentTypeCSS);
    response.end(data);
  } else if (request.method === 'GET' && request.url === '/static/scripts/script.js') {
    let data = fsRead('./static/scripts/script.js');
    response.writeHead(200, ContentTypeJavaScript);
    response.end(data);
  } else {
    response.writeHead(404, ContentTypeHTML);
    response.end('404 ERROR');
  }
});

server.listen(8080, () => {
  console.log('서버 가동 중');
});