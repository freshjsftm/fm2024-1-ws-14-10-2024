const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const Message = require('./models/Message');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  transports: ['websocket'],
  cors: {
    origin: 'http://localhost:5173',
  },
});
//io - спілкується з усіма користувачами
io.on('connection', (socket) => {
  //socket - з'єднання з конкретним користувачем
  console.log('connection to socket');
  socket.on('newMessage', async (dataMsg) => {
    try {
      console.log('event newMessage, dataMsg = ', dataMsg);
      const msg = await Message.create(dataMsg);
      if (!msg) {
        return socket.emit('badMsg', 'invalid message');
      }
      io.emit('newMessage', msg);
    } catch (error) {
      socket.emit('error', error);
    }
  });
  socket.on('disconnect', (reason) => {
    console.log('disconnect, reason: ', reason);
  });
});

server.listen(port, () => {
  console.log('server started at port = ', port);
});
