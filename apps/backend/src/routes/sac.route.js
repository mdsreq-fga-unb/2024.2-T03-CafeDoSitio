import express from 'express';
const sacRouter = express.Router();

import sacController from '../controllers/sac.controller.js';

sacRouter.post('/createSac', sacController.createSac);
sacRouter.get('/', sacController.findAllSac);
sacRouter.get('/:assunto', sacController.findAssuntoSac);
sacRouter.delete('/:id', sacController.deleteSacById);

export default sacRouter;