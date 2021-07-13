#const http = require('http');
#const port = process.env.PORT || 3000;

#const server = http.createServer((req, res) => {
  #res.statusCode = 200;
  #const msg = 'Hello Node!\n'
  #res.end(msg);
#});

#server.listen(port, () => {
  #console.log(`Server running on http://localhost:${port}/`);
#});

// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;
