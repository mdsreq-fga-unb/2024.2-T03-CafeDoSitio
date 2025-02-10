import express from 'express';
import faqController from '../controllers/faq.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const faqRouter = express.Router();

faqRouter.post('/', authMiddleware, faqController.createFaq);
faqRouter.get('/', faqController.findAllFaqs);
faqRouter.delete('/:_id', authMiddleware, faqController.deleteFaq);
faqRouter.put('/:_id', authMiddleware, faqController.updateFaq);

export default faqRouter;