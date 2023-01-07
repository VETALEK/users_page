const jsonServer = require('json-server');
const cors = require('cors');
const { port, allowedOrigins } = require('./config');
const customRouter = require('./router');

const server = jsonServer.create();
const corsHandler = cors({
  origin: allowedOrigins,
});
const defaultMiddleware = jsonServer.defaults();
const router = jsonServer.router(customRouter());

server.use(corsHandler);
server.use(defaultMiddleware);
server.use(router);

server.listen(port, () => {
  console.log(`json-server is running on the http://localhost:${port}`);
});
