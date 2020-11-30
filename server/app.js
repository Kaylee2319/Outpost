if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./db/config/index');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open/users'),
  passport = require('./middleware/authentication/index'),
  cookieParser = require('cookie-parser'),
  fileUpload = require('express-fileupload'),
  userRouter = require('./routes/secure/users');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api', openRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use('/api/users', userRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(
      path.join(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  socket.on('send message', function (msg) {
    io.emit('receive message', msg);
  });

  socket.on('disconnect', () => {});
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

module.exports = http;
