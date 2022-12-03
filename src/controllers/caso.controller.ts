import { Request, Response } from 'express';

import Clasificaciones from '../models/clasificaciones';
import Maternidades from '../models/maternidades';
import Pedidos from '../models/pedidos';

import Casos from '../models/casos';
import CasosBebe from '../models/casos_bebe';
import CasosMadre from '../models/casos_madre';
import CasosMalforma from '../models/casos_malforma';
import { DefaultScope } from 'sequelize-typescript';


const  crearCaso = async (___req: Request, ___res: Response) => {

    const datosCaso = {
        estado:"por revisar",
        usuarios_maternidades_usuarios_id:___req.body.UsuarioId,
        usuarios_maternidades_maternidades_id:___req.body.maternidadesId,
        
    }

    const casoNuevo = Casos.create({
        estado:datosCaso.estado,
        usuarios_maternidades_usuarios_id:datosCaso.usuarios_maternidades_usuarios_id,
        usuarios_maternidades_maternidades_id:datosCaso.usuarios_maternidades_maternidades_id,
    })
    
        console.log(await casoNuevo)
        ___res.status(200).json({status: '200', message: 'a'})
};

const crearCasoMadre = async (___req: Request, ___res: Response) => {

    const datosMadre = {
        casos_idcasos:___req.params.id,
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

    const madreNueva = CasosMadre.create({
        casos_idcasos: datosMadre.casos_idcasos,
        nombre: datosMadre.nombre ,
        apellido: datosMadre.apellido,
        dni: datosMadre.dni,
        nro_hc: datosMadre.nro_hc,
        edad: datosMadre.edad,
        domicilio_calle: datosMadre.domicilio_calle,
        domicilio_numero: datosMadre.domicilio_numero,
        domicilio_localidad: datosMadre.domicilio_localidad,
        domicilio_pcia: datosMadre.domicilio_pcia,
        telefono: datosMadre.telefono
    })
        
            console.log(madreNueva instanceof CasosMadre)

        ___res.status(200).json({status: '200', message: 'case created succesfully'})

}

const crearCasoBebe = async (___req: Request, ___res: Response) => {
    const datosBebe = {
        casos_idcasos:___req.params.id,
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

    const bebeNuevo = CasosBebe.create({
        casos_idcasos:datosBebe.casos_idcasos,
        nombre:datosBebe.nombre,
        apellido:datosBebe.apellido,
        dni:datosBebe.dni,
        nro_hc:datosBebe.nro_hc,
        fecha_nacimiento:datosBebe.fecha_nacimiento,
        nacido:datosBebe.nacido,
        alta:datosBebe.alta,
        sexo:datosBebe.sexo,
        peso:datosBebe.peso,
        talla:datosBebe.talla,
        pc:datosBebe.pc,
        eg:datosBebe.eg,
        gestas:datosBebe.gestas,
        gemelo:datosBebe.gemelo,
        con_alta:datosBebe.con_alta,
        hosp_derivado:datosBebe.hosp_derivado
    })
        
            console.log(await bebeNuevo)

        ___res.status(200).json({status: '200', message: 'case created succesfully'})
}

const crearCasoMalformidad = async (___req: Request, ___res: Response) => {
    const datosMalformacion={
        casos_idcasos:___req.params.id,
        detectado_prenatal:___req.body.detectadoPrenatal,
        malforma_prenatal:___req.body.malformaPrenatal,
        malformacion:___req.body.malformacion,
        estudios_complemtarios:___req.body.estudiosComplementarios
    }

    const malformacionNueva=CasosMalforma.create({
        casos_idcasos:datosMalformacion.casos_idcasos,
        detectado_prenatal:datosMalformacion.detectado_prenatal,
        malforma_prenatal:datosMalformacion.malforma_prenatal,
        malformacion:datosMalformacion.malformacion,
        estudios_complemtarios:datosMalformacion.estudios_complemtarios
    })

    console.log(await malformacionNueva)

    ___res.status(200).json({status: '200', message: 'case created succesfully'})
}

export {crearCaso, crearCasoMadre, crearCasoBebe, crearCasoMalformidad};