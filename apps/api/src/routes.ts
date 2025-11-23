import { Router } from 'express';
import { controllers } from './controllers';
import { statusController } from './status';

export const router = Router();

router.get('/status', statusController);
router.post('/pipeline/run', controllers.runPipeline);
router.post('/ai/dispatch', controllers.dispatchAI);