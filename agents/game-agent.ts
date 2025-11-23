export const gameAgent = {
  async process(input: any) {
    return { agent: 'game', received: input, output: 'Game logic executed' };
  }
};