import { combat_pipeline } from './combat/combat';
import { factions_pipeline } from './factions/factions';
import { terrain_pipeline } from './terrain/terrain';
import { world_events_pipeline } from './world-events/events';

export async function runPipeline(payload){
 switch(payload.type){
   case "combat": return combat_pipeline(payload);
   case "factions": return factions_pipeline(payload);
   case "terrain": return terrain_pipeline(payload);
   case "world_events": return world_events_pipeline(payload);
   default: return {error:"unknown pipeline"};
 }
}
