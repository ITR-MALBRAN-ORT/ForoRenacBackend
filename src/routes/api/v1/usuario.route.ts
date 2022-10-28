import { Router } from 'express';
import {
    firstLogin,
    login,
} from '../../../controllers/usuario.controller';

const router = Router();

router.post('/firstLogin', firstLogin);
router.post('/login', login);

export default router;