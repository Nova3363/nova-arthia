import { WebSocketServer } from 'ws';
import { logger } from './logger';

export function initGodotSocket(port: number = 8090) {
  const wss = new WebSocketServer({ port });

  wss.on('connection', ws => {
    logger('Godot connected');

    ws.on('message', msg => {
      logger('Godot says:', msg.toString());
    });

    ws.send(JSON.stringify({ connected: true, source: 'Nova Arthia Bridge' }));
  });

  logger('Godot WebSocket Bridge running on ' + port);
  return wss;
}