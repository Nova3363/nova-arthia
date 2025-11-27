import { Worker } from 'bullmq';
import { runPipeline } from '../../pipelines/pipelineRunner';

const worker=new Worker('arthia_jobs', async job=>{
 console.log("Job received:", job.data);
 return runPipeline(job.data);
},{connection:{host:process.env.REDIS_HOST, port:6379}});

console.log("Queue Worker running...");
