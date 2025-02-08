import { Router } from "express";
import cors from 'cors';
import visitaRouter from "./visita.route.js";
import userRouter from "./user.route.js";
import sacRouter from "./sac.route.js";
<<<<<<< HEAD
import blogRouter from "./blog.route.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.use('/visita', cors(), authMiddleware, visitaRouter);
router.use('/user', cors(), userRouter);
router.use('/sac', cors(), sacRouter);
router.use('/blog', cors(), blogRouter);

=======

const router = Router();

router.use('/visita', cors(), visitaRouter);
router.use('/user', cors(), userRouter);
router.use('/sac', cors(), sacRouter);
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76

export default router;