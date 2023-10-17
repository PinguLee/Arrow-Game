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
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, ContentTypeHTML);
    response.end(fs.readFileSync('./index.html', 'utf8'));
  } else if (request.method === 'GET' && request.url === '/hard') {
    let data = fsRead('./hard.html');
    response.writeHead(200, ContentTypeHTML);
    response.end(fs.readFileSync('./hard.html', 'utf8'));
  } else if (request.method === 'GET' && request.url === '/static/css/style.css') {
    response.writeHead(200, ContentTypeCSS);
    response.end(fs.readFileSync('./static/css/style.css' , 'utf8'));
  } else if (request.method === 'GET' && request.url === '/static/scripts/script.js') {
    response.writeHead(200, ContentTypeJavaScript);
    response.end(fs.readFileSync('./static/scripts/script.js', 'utf8'));
  } else {
    response.writeHead(404, ContentTypeHTML);
    response.end('404 ERROR');
  }
});

server.listen(8080, () => {
  console.log('서버 가동 중');
});