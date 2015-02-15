var app = require('./app'); 
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port =  process.env.PORT;
app.set('port', port);
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); 