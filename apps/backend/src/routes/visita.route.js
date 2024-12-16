import express from 'express';
import visitaController from '../controllers/visita.controller.js';
const visitaRouter = express.Router();

visitaRouter.post('/createVisita', visitaController.createVisita);
visitaRouter.get('/findAllVisita', visitaController.findAllVisita);
visitaRouter.delete('/deleteVisita/:id', visitaController.deleteVisita);
visitaRouter.patch('/patchVisita/:id', visitaController.patchVisita);

export default visitaRouter;