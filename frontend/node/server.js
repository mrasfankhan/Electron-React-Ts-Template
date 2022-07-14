const express = require('express');
const apps = express();
const http = require('http');
const server = http.createServer(apps);

apps.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});