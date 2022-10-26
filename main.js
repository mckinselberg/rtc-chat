import express from 'express';
import { Server } from 'socket.io';
import fs from 'fs';
import https from 'https';
import http from 'http';

const app = express();
const PORT = process.env.PORT || 8443;

app.use(express.static('public'));

const options = {
  key: fs.readFileSync('./key.pem', 'utf8'),
  cert: fs.readFileSync('./server.crt', 'utf8'),
}


const server = http.createServer(options, app).listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});

// const upgradedServer = new Server(server);

// upgradedServer.on('connection', (socket) => {
//   socket.on('sendingMessage', (data) => {
//     upgradedServer.emit('broadcastMessage', data);
//     console.log(data);
//   });
//   console.log('Websocket Connected', socket.id);
// });
