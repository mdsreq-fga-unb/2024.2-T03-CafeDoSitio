import express from 'express';
import visitaController from '../controllers/visita.controller.js';
const visitaRouter = express.Router();
<<<<<<< HEAD

visitaRouter.post('/createVisita', visitaController.createVisita);
visitaRouter.get('/findAllVisita', visitaController.findAllVisita);
visitaRouter.delete('/deleteVisita/:id', visitaController.deleteVisita);
=======
import { authMiddleware } from "../middlewares/auth.middleware.js";

visitaRouter.post('/createVisita', authMiddleware, visitaController.createVisita);
visitaRouter.get('/findAllVisita', visitaController.findAllVisita);
visitaRouter.delete('/deleteVisita/:id', authMiddleware, visitaController.deleteVisita);
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
visitaRouter.patch('/patchVisita/:id', visitaController.patchVisita);

export default visitaRouter;