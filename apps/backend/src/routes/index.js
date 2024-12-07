import { Router } from "express";
import cors from 'cors';
import disponibilidadeRouter from "./DisponibilidadeVisita.route.js";
import userRouter from "./user.route.js";
import sacRouter from "./sac.route.js";

const router = Router();

router.use('/api', cors(), disponibilidadeRouter);
router.use('/user', cors(), userRouter);
router.use('/sac', cors(), sacRouter);

export default router;