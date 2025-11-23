import { initWebSocket } from './websocket';
import { logger } from './logger';

export function attachWebSocket(httpServer: any) {
  const wss = initWebSocket(httpServer);
  logger.info("WebSocket gateway attached");
  return wss;
}