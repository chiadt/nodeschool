'use strict';
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', (process.argv[2] || 8080));

server.route({
    path: '/',
    method: 'GET',
    handler: { file: "index.html" }
});

server.start();
