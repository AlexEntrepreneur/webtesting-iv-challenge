const express = require('express');
const server = express();
const usersRouter = require('./routers/usersRouter');

server.use('/api/users', usersRouter);
server.use(express.json())

server.get('/', (req, res) => {
  res.send('Welcome To My Working API!');
});

module.exports = server;
