const express = require('express');
const socket = require('socket.io');

let app = express();

let server = app.listen(4622, () => {
  console.log('listen')
});

app.use(express.static('public'));

let upgradedServer = socket(server);

upgradedServer.on('connection', (socket) => {
  socket.on('sendingMessage', (data) => {
    upgradedServer.emit('broadcastMessage', data);
    console.log(data);
  });
  console.log('Websocket Connected', socket.id)
})