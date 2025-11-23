import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.API_PORT || 8080,
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_SERVICE_KEY || '',
  r2Endpoint: process.env.R2_ENDPOINT || '',
  r2AccessKey: process.env.R2_ACCESS_KEY || '',
  r2SecretKey: process.env.R2_SECRET_KEY || '',
  redisUrl: process.env.REDIS_URL || ''
};