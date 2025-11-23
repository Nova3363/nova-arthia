export const worldEventsPipeline = {
  async run(input:any) {
    return { pipeline: 'world-events', status: 'executed', input };
  }
};