export const pipelineService = {
  async run(pipeline: string, payload: any) {
    return { pipeline, executed: true, payload };
  }
};