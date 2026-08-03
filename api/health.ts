import type { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  res.json({ status: "ok", app: "Fazenda Jutuba Server (Vercel)" });
}
