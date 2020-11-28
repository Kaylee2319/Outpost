const http = require('./server/app');

const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
