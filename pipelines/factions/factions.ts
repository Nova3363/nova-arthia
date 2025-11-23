export const factionsPipeline = {
  async simulate(input:any) {
    return { pipeline: 'factions', status: 'simulated', input };
  }
};