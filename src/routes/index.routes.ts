import { Router } from 'express';
import heatlthRouter from './api/v1/health.router';
import usuariosRouter from './api/v1/usuarios.router';

const router = Router();

router.use('/health', heatlthRouter);

router.use('/users', usuariosRouter);

export default router;
