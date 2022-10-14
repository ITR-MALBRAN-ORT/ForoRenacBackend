import { Router } from 'express';
import {
  getHealth,
  getReadiness,
} from '../../../controllers/health.controller';

const router = Router();

router.get('/liveness', getHealth);

router.get('/readiness', getReadiness);

export default router;
