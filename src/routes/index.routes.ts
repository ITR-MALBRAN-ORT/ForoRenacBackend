import { Router } from 'express';
import heatlthRouter from './api/v1/health.router';

const router = Router();

router.use('/health', heatlthRouter);

export default router;
