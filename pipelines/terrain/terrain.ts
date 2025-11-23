export const terrainPipeline = {
  async generate(input:any) {
    return { pipeline: 'terrain', status: 'generated', input };
  }
};