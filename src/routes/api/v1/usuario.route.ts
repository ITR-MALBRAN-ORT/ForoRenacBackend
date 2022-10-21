import { Router } from 'express';
import {
    firstLogin,
} from '../../../controllers/usuario.controller';

const router = Router();

router.post('/firstLogin', firstLogin);

export default router;