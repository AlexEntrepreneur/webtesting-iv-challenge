const express = require('express');
const server = express();
const usersRouter = require('./routers/usersRouter');

server.use('/api/users', usersRouter);

module.exports = server;
