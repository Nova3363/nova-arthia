export const combatAgent = {
  async process(input: any) {
    return { agent: 'combat', received: input, output: 'Combat evaluation executed' };
  }
};