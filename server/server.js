const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const Message = require('./models/Message');
const constants = require('./constants');
const {
  WS_EVENTS: { NEW_MSG, ERR_MSG },
} = constants;
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  //transports: ['websocket'],
  cors: {
    origin: 'http://localhost:5173',
  },
});
//io - спілкується з усіма користувачами
io.on('connection', (socket) => {
  //socket - з'єднання з конкретним користувачем
  console.log('connection to socket');
  socket.on(NEW_MSG, async (dataMsg) => {
    try {
      const msg = await Message.create(dataMsg);
      const [message] = await Message.find({ _id: msg._id }).populate({
        path: 'userId',
        select: 'login',
      });
      io.emit(NEW_MSG, message);
    } catch (error) {
      socket.emit(ERR_MSG, error.errors.content.message);
    }
  });
  socket.on('disconnect', (reason) => {
    console.log('disconnect, reason: ', reason);
  });
});

server.listen(port, () => {
  console.log('server started at port = ', port);
});
