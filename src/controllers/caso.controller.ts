import { Request, Response } from 'express';
import Usuarios from "../models/usuarios";

import { compare, hash } from 'bcrypt';

    const  crearCaso = async (___req: Request, ___res: Response) => {
        const datosMadre = {
            nombre:___req.body.nombreMadre,
            apellido:___req.body.apellidoMadre,
            dni:___req.body.dniMadre,
            nro_hc:___req.body.numeroHistoriaClinicaMadre,
            edad:___req.body.edadMadre,
            domicilio_calle:___req.body.domicilioCalleMadre,
            domicilio_numero:___req.body.domicilioNumeroMadre,
            domicilio_localidad:___req.body.domicilioLocalidadMadre,
            domicilio_pcia:___req.body.domicilioPciaMadre,
            telefono: ___req.body.telefonoMadre
        }

        const datosBebe = {
            nombre:___req.body.nombreBebe,
            apellido:___req.body.apellidoBebe,
            dni:___req.body.dniBebe,
            nro_hc:___req.body.numeroHistoriaClinicaBebe,
            fecha_nacimiento:___req.body.fechaNacimientoBebe,
            nacido:___req.body.nacidoBebe,
            alta:___req.body.altaBebe,
            sexo:___req.body.sexoBebe,
            peso:___req.body.pesoBebe,
            talla:___req.body.tallaBebe,
            pc:___req.body.pcBebe,
            eg:___req.body.egBebe,
            gestas:___req.body.gestasBebe,
            gemelo:___req.body.gemeloBebe,
            con_alta:___req.body.conAltaBebe,
            hosp_derivado:___req.body.hospitalDerivadoBebe
        }

        const datosMalformacion={
            detectado_prenatal:___req.body.detectadoPrenatal,
            malforma_prenatal:___req.body.malformaPrenatal,
            malformacion:___req.body.malformacion,
            estudios_complemtarios:___req.body.estudiosComplementarios
        }


            ___res.status(200).json({status: '200', message: 'a'})
    };



export {crearCaso};