import { Request, Response } from 'express';
export const statusController = (req: Request, res: Response) => {
  res.json({ ok: true, service: 'Nova Arthia API' });
};