import { gameAgent } from './game-agent';
import { worldAgent } from './world-agent';
import { combatAgent } from './combat-agent';
import { economyAgent } from './economy-agent';

export const orchestrator = {
  async dispatch(agent: string, input: any) {
    switch(agent) {
      case 'game': return gameAgent.process(input);
      case 'world': return worldAgent.process(input);
      case 'combat': return combatAgent.process(input);
      case 'economy': return economyAgent.process(input);
      default:
        return { error: 'Unknown agent', agent };
    }
  }
};