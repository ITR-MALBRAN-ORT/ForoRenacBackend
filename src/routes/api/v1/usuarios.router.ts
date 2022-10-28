import { Router } from 'express';
import {
  changePassword,
} from '../../../controllers/usuarios.controller';

const router = Router();

router.post('/changePassword', changePassword);

export default router;
