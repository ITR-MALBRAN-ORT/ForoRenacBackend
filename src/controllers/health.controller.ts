import { Request, Response } from 'express';
import myJson from "../../data.json"

const bcrypt = require("bcrypt")

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
  const result = myJson.filter(word => word.user===___req.body.user)
  console.log("hola",result[0])
  if(result[0]===undefined){
    ___res.status(400).json({ status: 'DOWN', message: 'no user found' });
  }
    console.log(___req.body.password)
  ___res.json({ status: '400', message: 'not configured yet' });
};

export { getHealth, getReadiness, firstLogin };//primer commit
