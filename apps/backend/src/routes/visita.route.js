import express from 'express';
import VisitaController from '../controllers/visita.controller.js';

const router = express.Router();

router.post('/disponibilidades', VisitaController.criarDisponibilidade);
router.get('/disponibilidades', VisitaController.listarDisponibilidades);
router.delete('/disponibilidades/:id', VisitaController.deletarDisponibilidade);


export default router;