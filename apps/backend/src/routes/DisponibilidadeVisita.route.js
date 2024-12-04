import express from 'express';
import disponibilidadeVisitaController from '../controllers/disponibilidadeVisita.controller.js';

const router = express.Router();

router.post('/disponibilidades', disponibilidadeVisitaController.criarDisponibilidade);
router.get('/disponibilidades', disponibilidadeVisitaController.listarDisponibilidades);
router.delete('/disponibilidades/:id', disponibilidadeVisitaController.deletarDisponibilidade);


export default router;