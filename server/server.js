const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server);
io.on('connection', () => {
  console.log('connection to socket');
});

server.listen(port, () => {
  console.log('server started at port = ', port);
});
