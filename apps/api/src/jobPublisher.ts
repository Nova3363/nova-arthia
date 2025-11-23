import { config } from './config';
import IORedis from 'ioredis';

const redis = new IORedis(config.redisUrl);

export async function publishJob(queue: string, payload: any) {
  await redis.lpush(queue, JSON.stringify(payload));
}