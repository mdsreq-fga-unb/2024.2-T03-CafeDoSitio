import express from 'express';
import VisitaController from '../controllers/visita.controller.js';
const visitaRouter = express.Router();

visitaRouter.post('/createVisita', VisitaController.createVisita);

export default visitaRouter;