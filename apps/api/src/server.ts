import express from 'express';
import { createWebSocketServer } from './websocket';
import { supabase } from './supabaseClient';
import { uploadToR2 } from './r2Client';
import { publishJob } from './jobPublisher';
import { godotWebhook } from '../../godot-bridge/webhook';

const app=express();
app.use(express.json());

// Health
app.get('/',(req,res)=>res.send("NOVA API OK"));

// Pipeline trigger
app.post('/pipeline', async(req,res)=>{
 await publishJob("arthia_jobs", req.body);
 return res.json({ok:true});
});

// Upload demo
app.post('/upload', async(req,res)=>{
 const resp = await uploadToR2("demo.json", Buffer.from(JSON.stringify(req.body)));
 res.json({ok:true, resp});
});

// Godot webhook
app.post('/godot/webhook', godotWebhook);

const server = app.listen(3000,()=>console.log("API running on 3000"));
createWebSocketServer(server);
