import { WebSocketServer } from 'ws';
import { logger } from './logger';

export function initWebSocket(server: any) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', ws => {
    logger.info('WS client connected');
    ws.send(JSON.stringify({ status: 'connected', service: 'Nova Arthia WS' }));
  });

  return wss;
}