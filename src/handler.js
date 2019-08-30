const fs = require('fs');
const path = require('path');
const url = require('url');

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public/index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'content-type': 'text/html'});
      response.end('404: page not found');
    } else {
      response.writeHead(200, { 'content-type': 'text/html'});
      response.end(file);
    }
  });
}

const handlePublic = (request, response) => {
    const filePath = path.join(__dirname, '..', request.url);
    const extension = path.extname(request.url);
    const extensionType = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.ico': 'image/x-icon'
    };
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(404, { 'content-type': 'text/html'});
        response.end('404: page not found');
      } else {
        response.writeHead(200, {'content-type': extensionType[extension]});
        response.end(file);
      }
    });
}

module.exports = { handleHome, handlePublic };
