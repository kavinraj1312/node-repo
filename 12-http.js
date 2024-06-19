const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("welcome to Home page");
  } else if (req.url === '/about') {
    res.end("this is about page");
  } else {
    res.end(`<h1>the page is not found</h1>`);
  }
});

server.listen(5000, () => {
  console.log("server is listening at port 5000");
});