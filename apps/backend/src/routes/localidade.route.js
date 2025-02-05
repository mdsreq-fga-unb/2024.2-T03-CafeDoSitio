import express from 'express';
import localidadeController from '../controllers/localidade.controller.js';
const localidadeRouter = express.Router();

localidadeRouter.post('/createLocalidade', localidadeController.createLocalidade);
localidadeRouter.get('/', localidadeController.findAllLocalidades);
localidadeRouter.get('/:estado', localidadeController.findAllLocalidadesByEstado);

export default localidadeRouter;
