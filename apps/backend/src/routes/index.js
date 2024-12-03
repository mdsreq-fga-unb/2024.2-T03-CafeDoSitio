import { Router } from "express";
import cors from 'cors';
import sacRouter from "./sac.route.js";

const router = Router();

router.use('/sac', cors(), sacRouter);

export default router;