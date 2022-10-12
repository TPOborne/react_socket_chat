export default (socket) => ({ name, msg }) => {
  socket.broadcast.emit('message', { name, msg });
};