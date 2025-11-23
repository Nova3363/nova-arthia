export const worldAgent = {
  async process(input: any) {
    return { agent: 'world', received: input, output: 'World simulation executed' };
  }
};