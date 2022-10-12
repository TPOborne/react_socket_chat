import messageController from './message.js';

export default (socket) => {
  console.log('a user connected');

  socket.on('message', messageController(socket));
};
