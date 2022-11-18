import { Router } from 'express';
import {
    firstLogin,
    changePassword,
    sendChangePasswordEmail
} from '../../../controllers/usuario.controller';

const router = Router();

router.post('/firstLogin', firstLogin);
router.post('/changePassword', changePassword);
router.post('/sendChangePasswordEmail', sendChangePasswordEmail);

export default router;