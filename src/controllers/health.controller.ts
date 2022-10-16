import { Request, Response } from 'express';
const bcrypt = require("bcrypt");

const getHealth = (_req: Request, res: Response): any => {
  console.log('>>> getHealth');
  res.json({ status: 'UP' });
};

const getReadiness = (__req: Request, __res: Response): any => {
  console.log('>>> getReadiness');
  __res.json({ status: 'UP', message: 'not configured yet' });
};

const firstLogin = (___req: Request, ___res: Response): any => {
  console.log('>>> getReadiness')
  console.log(___req.body.password)
  bcrypt.hash(___req.body.password)
  console.log(___req.body.password)
  ___res.json({ status: 'UP', message: 'not configured yet' });
};

export { getHealth, getReadiness, firstLogin };//primer commit
