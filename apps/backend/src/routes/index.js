import { Router } from "express";
import cors from 'cors';
import visitaRouter from "./visita.route.js";
import userRouter from "./user.route.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.use('/visita', cors(), visitaRouter);
router.use('/user', cors(), userRouter);

export default router;