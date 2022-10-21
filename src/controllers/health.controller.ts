import { Request, Response } from 'express';

const getHealth = (_req: Request, res: Response): any => {
  console.log('>>> getHealth');
  res.json({ status: 'UP' });
};

const getReadiness = (__req: Request, __res: Response): any => {
  console.log('>>> getReadiness');
  __res.json({ status: 'UP', message: 'not configured yet' });
};

export { getHealth, getReadiness};//primer commit
