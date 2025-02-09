import { Router } from "express";
import cors from 'cors';
import visitaRouter from "./visita.route.js";
import userRouter from "./user.route.js";
import sacRouter from "./sac.route.js";
import blogRouter from "./blog.route.js";
import blogFilterRouter from "./blogFilter.route.js";

const router = Router();

router.use('/visita', cors(), visitaRouter);
router.use('/user', cors(), userRouter);
router.use('/sac', cors(), sacRouter);
router.use('/blog', cors(), blogRouter);
router.use('/blogFilter', cors(), blogFilterRouter);


export default router;