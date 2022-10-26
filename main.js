import express from 'express';
import { Server } from 'socket.io';
import fs from 'fs';
import https from 'https';

const app = express();

app.use(express.static('public'));

const options = {
  key: fs.readFileSync('./key.pem', 'utf8'),
  cert: fs.readFileSync('./server.crt', 'utf8'),
}


const server = https.createServer(options, app).listen(8080, () => {
  console.log('listen');
});

const upgradedServer = new Server(server);

upgradedServer.on('connection', (socket) => {
  socket.on('sendingMessage', (data) => {
    upgradedServer.emit('broadcastMessage', data);
    console.log(data);
  });
  console.log('Websocket Connected', socket.id);
});
