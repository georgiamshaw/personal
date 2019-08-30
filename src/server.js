// requiring the http module
const http = require('http');
// requiring the router.js file
const router = require('./router');
// port either falls on one assigned to it or on 3000 if no port is assigned
let port = process.env.PORT || 3000;
// creating the server
const server = http.createServer(router);

server.listen(port, () => {
  console.log(`Your server is running on port: ${port}`)
});
