import express from 'express';
import visitaController from '../controllers/visita.controller.js';
const visitaRouter = express.Router();
import { authMiddleware } from "../middlewares/auth.middleware.js";

visitaRouter.post('/createVisita', authMiddleware, visitaController.createVisita);
visitaRouter.get('/findAllVisita', visitaController.findAllVisita);
visitaRouter.delete('/deleteVisita/:id', authMiddleware, visitaController.deleteVisita);
visitaRouter.patch('/patchVisita/:id', visitaController.patchVisita);

export default visitaRouter;