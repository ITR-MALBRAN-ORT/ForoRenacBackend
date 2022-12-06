import { Router } from 'express';
import {
  crearCaso,
  crearCasoMadre,
  crearCasoBebe,
  crearCasoMalformidad
} from '../../../controllers/caso.controller';

const router = Router();

router.post('/crearcaso', crearCaso);

router.post('/crearcasomadre/:id', crearCasoMadre);

router.post('/crearcasobebe/:id', crearCasoBebe);

router.post('/crearcasomalformidad/:id', crearCasoMalformidad);

export default router;
