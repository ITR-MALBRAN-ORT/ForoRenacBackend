import { Request, Response } from 'express';
import Usuarios from "../models/usuarios";

import { compare, hash } from 'bcrypt';

    const  crearCaso = async (___req: Request, ___res: Response) => {
        const datosMadre = await Usuarios.findAll({
            where:{
                mail:___req.body.mail
            }
        })
        
        console.log(___req.body.password)



            ___res.status(200).json({status: '200', message: 'a'})
    };



export {crearCaso};