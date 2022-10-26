import { Router } from 'express';
import heatlthRouter from './api/v1/health.router';
import usuarioRouter from "./api/v1/usuario.route";

const router = Router();

router.use('/health', heatlthRouter);

router.use('/user', usuarioRouter);

export default router;
