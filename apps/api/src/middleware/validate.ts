import { Request, Response, NextFunction } from 'express';

export function validate(required: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const field of required) {
      if (!(field in req.body)) {
        return res.status(400).json({ error: `Missing field: ${field}` });
      }
    }
    next();
  };
}