import { Router } from "express";
import cors from 'cors';
import visitaRouter from "./visita.route.js";
import userRouter from "./user.route.js";
import sacRouter from "./sac.route.js";
import estabelecimentoRouter from "./estabelecimento.route.js";
import produtoRouter from "./produto.route.js";
import blogRouter from "./blog.route.js";
import blogFilterRouter from "./blogFilter.route.js";

const router = Router();

router.use('/visita', cors(), visitaRouter);
router.use('/user', cors(), userRouter);
router.use('/sac', cors(), sacRouter);
router.use('/blog', cors(), blogRouter);
router.use('/blogFilter', cors(), blogFilterRouter);
router.use('/estabelecimento', cors(), estabelecimentoRouter);
router.use('/produto', cors(), produtoRouter);

export default router;