var http = require('http');

//create a server object:
var x, y, z;
x = 5;
y = 6;
z = x + y;

http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type':'text/html'});
  res.write(`${z}`); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080