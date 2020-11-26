require('./db/config/index');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open/users'),
  passport = require('./middleware/authentication/index'),
  cookieParser = require('cookie-parser'),
  fileUpload = require('express-fileupload'),
  userRouter = require('./routes/secure/users');

const app = express();

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

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
module.exports = app;

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
