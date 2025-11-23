export const logger = {
  info: (...msg:any[]) => console.log('[QUEUE]', ...msg),
  error: (...msg:any[]) => console.error('[QUEUE ERROR]', ...msg)
};