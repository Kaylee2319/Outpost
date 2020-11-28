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

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('a user is connected', socket.id);

  socket.on('send message', function (msg) {
    io.emit('receive message', msg);
  });

  socket.on('disconnect', () => {
    console.log('...and disconnected');
  });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

//Middleware
app.use(express.json());

app.use(cookieParser());

// Unauthenticated routes
app.use('/api', openRoutes);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

// Any authentication middleware and related routing would be here.
app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use('/api/users', userRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(
      path.join(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

module.exports = http;
