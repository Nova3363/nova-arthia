import { Worker, Queue } from 'bullmq';
import { config } from './config';
import { logger } from './logger';

const connection = { connection: { url: config.redisUrl } };

export const jobQueue = new Queue('nova_jobs', connection);

new Worker('nova_jobs', async job => {
  logger.info('Processing job:', job.id, job.name);
  return { ok: true, payload: job.data };
}, connection);

logger.info('Queue system running');
