import { Router } from 'express';
import {
  crearCaso
} from '../../../controllers/caso.controller';

const router = Router();

router.post('/crearcaso', crearCaso);

export default router;
