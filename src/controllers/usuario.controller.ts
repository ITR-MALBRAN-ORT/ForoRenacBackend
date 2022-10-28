import { Request, Response } from 'express';
import myJson from "../../data.json";
import Usuarios from "../models/usuarios";

import { compare, hash } from 'bcrypt';

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
        ___res.status(400).json({ status: 'UP', message: 'no user found' });
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

    const login = async (___req: Request, ___res: Response) => {

        try {
            const user = await Usuarios.findAll({
                where:{
                    mail:___req.body.mail
                }
            })
    
            if (Array.isArray(user) && user.length===0){
                ___res.status(400).json({ status: '400', message: 'user doesnt exist' })
            }else{
                const validUser = user[0]
               const validPassword = await compare(___req.body.password, validUser.clave)
               !validPassword&&___res.status(400).json({status: '400', message: 'incorrect password'})
               ___res.status(200).json({ status: '200', message: 'usuario validado', usuario: {
                nombre:validUser.nombre,
                mail: validUser.mail
               } })
            }
        } catch (error) {
            ___res.status(400).json({status: '400', message: error})
        }
    };

export {firstLogin};