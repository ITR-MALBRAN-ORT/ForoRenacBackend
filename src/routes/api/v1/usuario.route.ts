import { Router } from 'express';
import {
    firstLogin,
    changePassword
} from '../../../controllers/usuario.controller';

const router = Router();

router.post('/firstLogin', firstLogin);
router.post('/changePassword', changePassword);

export default router;