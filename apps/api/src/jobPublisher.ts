import { Queue } from 'bullmq';
const queue=new Queue('arthia_jobs',{connection:{host:process.env.REDIS_HOST, port:6379}});
export async function publishJob(name,payload){
 return queue.add(name,payload);
}
