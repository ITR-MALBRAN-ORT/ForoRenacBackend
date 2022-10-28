import { Request, Response } from 'express';
import myJson from "../../data.json";
import userModel from '../models/usuarios';

import { compare, hash, hashSync } from 'bcrypt';

export const unHashPassword = async (password: string, hashedPassword: string) => {
    console.log(password, hashedPassword)  
    const isSame = await compare(password, hashedPassword);
    return isSame;
};

const  firstLogin = async (___req: Request, ___res: Response) => {
    console.log('>>> getReadiness')
    console.log(___req.body.password)
    const result = myJson.filter(word => word.user===___req.body.user)
    if(result[0]===undefined){
        ___res.status(400).json({ status: '400', message: 'no user found' });
    }else{
        const isSame= await unHashPassword(___req.body.password, result[0].password)
        if(isSame===true){
            if(result[0].temporaly===true){
                ___res.status(200).json({ status: '200', message: 'succed logIn, password is temporaly' })
            }else{
                ___res.status(200).json({ status: '200', message: 'succed logIn, password is not temporaly' })
            }
        }else{
            ___res.status(400).json({status: '400', message: 'incorrect password'})
        }
        }
};

const changePassword = async (__req: Request, __res: Response) => {
    console.log('>>> changePassword');
    try {
        const user = await userModel.findOne({
            where:{
            mail: __req.body.mail,
            },
        });
  
        if (!user)
            return __res.status(400).json({
                status: 400,
                message: 'Email does not exist',
            })
  
        const match = await compare(__req.body.oldPassword, user.clave)
  
        if(!match)
            return __res.status(400).json({
                status: 400,
                message: 'Incorrect password',
            })
  
        const newPassword = hashSync(__req.body.newPassword, 10)

        user.clave = newPassword
        if(user.estado == 'T')
            user.estado == 'A'
      
        await user.save();
        return __res.status(200).json({
            status: 200,
            message: 'Password changed',
        })
        
    } catch (e) {
      __res.status(400).json(e)
      console.log(e)
    }
};

export {firstLogin, changePassword};