import express from 'express';
import visitaController from '../controllers/visita.controller.js';
const visitaRouter = express.Router();

visitaRouter.post('/createVisita', visitaController.createVisita);
visitaRouter.get('/findAllVisita', visitaController.findAllVisita);

export default visitaRouter;