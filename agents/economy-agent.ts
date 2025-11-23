export const economyAgent = {
  async process(input: any) {
    return { agent: 'economy', received: input, output: 'Economy simulation executed' };
  }
};