export const combatPipeline = {
  async evaluate(input:any) {
    return { pipeline: 'combat', status: 'evaluated', input };
  }
};