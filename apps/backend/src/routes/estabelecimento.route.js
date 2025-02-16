import express from 'express';
import estabelecimentoController from '../controllers/estabelecimento.controller.js';
const estabelecimentoRouter = express.Router();

estabelecimentoRouter.post('/createEstabelecimento', estabelecimentoController.createEstabelecimento);
estabelecimentoRouter.get('/', estabelecimentoController.findAllEstabelecimentos);
estabelecimentoRouter.get('/:estado', estabelecimentoController.findAllEstabelecimentosByEstado);

export default estabelecimentoRouter;
