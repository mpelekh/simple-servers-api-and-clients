'use strict';

const Hapi = require('hapi');

const apiRoutes = require('./routes/api');

const server = new Hapi.Server();
server.connection({ port: 8000 });

server.route(apiRoutes);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
