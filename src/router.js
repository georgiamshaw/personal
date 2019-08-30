const fs = require('fs');
const url = require('url');
const path = require('path');

const router = (request, response) => {
  if (request.url === '/' {
    handleHome(request, response);
  })
}
  else if (request.url.startsWith('public/') => {
    handlePublic(request, response);
  });

module.exports = router;
