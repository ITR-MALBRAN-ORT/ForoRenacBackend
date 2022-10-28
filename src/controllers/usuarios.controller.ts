import { Request, Response } from 'express';
import userModel from '../models/usuarios';
import bcrypt from 'bcrypt';

const changePassword = async (__req: Request, __res: Response): Promise<any> => {
  console.log('>>> changePassword');
  console.log(__req.body)
  try {
    const user = await userModel.findAll({
      where:{
        mail: __req.body.mail,
      },
    });

    if (Array.isArray(user) && user.length > 0)
      return __res.status(400).json('Email already exists')

    const match = bcrypt.compare(__req.body.oldPassword, user[0].clave)

    if(!match)
      return __res.status(400).json('Incorrect password')

    const newPassword = bcrypt.hashSync(__req.body.newPassword, 10)

    user.clave = newPassword
    if(user.estado == 'T')
      user.estado == 'A'
    
    await user.save()
    
    return __res.status(200).json('Password changed')
  } catch (e) {
    __res.status(400).json(e)
    console.log(e)
  }
};

export { changePassword };
