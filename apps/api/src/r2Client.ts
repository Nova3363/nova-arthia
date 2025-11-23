import { S3Client } from '@aws-sdk/client-s3';
import { config } from './config';

export const r2 = new S3Client({
  region: 'auto',
  endpoint: config.r2Endpoint,
  credentials: {
    accessKeyId: config.r2AccessKey,
    secretAccessKey: config.r2SecretKey
  }
});