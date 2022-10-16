import { Router } from 'express';
import {
  getHealth,
  getReadiness,
  firstLogin,
} from '../../../controllers/health.controller';

const router = Router();

router.get('/liveness', getHealth);

router.get('/readiness', getReadiness);

router.post('/firstLogin', firstLogin);

export default router;
