import { jobQueue } from './index';

export async function publish(name: string, payload: any) {
  return await jobQueue.add(name, payload);
}