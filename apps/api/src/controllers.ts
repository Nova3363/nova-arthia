import { Request, Response } from 'express';
import { pipelineService } from './services/pipelineService';
import { aiService } from './services/aiService';

export const controllers = {
  runPipeline: async (req: Request, res: Response) => {
    const { pipeline, payload } = req.body;
    const result = await pipelineService.run(pipeline, payload);
    res.json({ ok: true, result });
  },

  dispatchAI: async (req: Request, res: Response) => {
    const { agent, input } = req.body;
    const response = await aiService.process(agent, input);
    res.json({ ok: true, response });
  }
};