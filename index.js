import express from 'express';
import { Server } from 'socket.io';

const app = express();

const server = app.listen(4622, () => {
  console.log('listen');
});

app.use(express.static('public'));

const upgradedServer = new Server(server);

upgradedServer.on('connection', (socket) => {
  socket.on('sendingMessage', (data) => {
    upgradedServer.emit('broadcastMessage', data);
    console.log(data);
  });
  console.log('Websocket Connected', socket.id);
});
