import { Server } from 'ws';
export function createWebSocketServer(server){
 const wss=new Server({server});
 wss.on('connection',ws=>{
   ws.send("WS Connected");
 });
 return wss;
}
