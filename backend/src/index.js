import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import socketController from './controllers/index.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', socketController);

server.listen(3000, () => {
  console.log('listening on *:3000');
});