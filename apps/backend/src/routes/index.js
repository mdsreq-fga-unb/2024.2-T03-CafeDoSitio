import { Router } from "express";
import cors from 'cors';
import disponibilidadeRouter from "./DisponibilidadeVisita.route.js";

const router = Router();

router.use('/api', cors(), disponibilidadeRouter);

export default router;