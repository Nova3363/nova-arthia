import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  redisUrl: process.env.REDIS_URL || ""
};