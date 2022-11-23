import { Router } from 'express';
import {
    firstLogin,
    changePassword,
    sendChangePasswordEmail,
    login,
} from '../../../controllers/usuario.controller';

const router = Router();

router.post('/firstLogin', firstLogin);
router.post('/changePassword', changePassword);
router.post('/sendChangePasswordEmail', sendChangePasswordEmail);
router.post('/login', login);

export default router;