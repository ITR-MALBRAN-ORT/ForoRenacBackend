import { Router } from 'express';
import heatlthRouter from './api/v1/health.router';
import usuarioRouter from "./api/v1/usuario.route";
import casosRouter from "./api/v1/casos.router"

const router = Router();

router.use('/health', heatlthRouter);

router.use('/user', usuarioRouter);

router.use('/casos', casosRouter);


export default router;
