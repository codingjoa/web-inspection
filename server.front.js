const express = require('express');
const path = require('path');
const app = express();

// SPA Setting
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// SPA Server
const port = process.env.PORT ?? 3000;
const server = (require('http').createServer({}, app));
server.listen(port);

/* Linux Signal */
const toStop = () => {
  server.close(() => console.log('server closed.'));
};
process.on('SIGINT', toStop);
process.on('SIGHUP', toStop);
