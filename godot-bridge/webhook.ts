import { Request, Response } from 'express';
import { logger } from './logger';

export const godotWebhook = (req: Request, res: Response) => {
  logger('Webhook from Godot:', req.body);
  res.json({ ok: true });
};