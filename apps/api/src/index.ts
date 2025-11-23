import express from 'express';
import http from 'http';
import { router } from './routes';
import { security } from './middleware/security';
import { limiter } from './middleware/rateLimit';
import { errorHandler } from './errorHandler';
import { attachWebSocket } from './websocketIntegration';
import { config } from './config';

const app = express();
const server = http.createServer(app);

// middlewares
app.use(express.json());
app.use(security);
app.use(limiter);

// routes
app.use('/api', router);

// errors
app.use(errorHandler);

// websocket
attachWebSocket(server);

server.listen(config.port, () =>
  console.log(`Nova Arthia API running on port ${config.port}`)
);
