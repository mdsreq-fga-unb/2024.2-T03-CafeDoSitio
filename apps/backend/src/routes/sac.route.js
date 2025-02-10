import express from 'express';
import upload from "../middlewares/sac.middleware.js"
const sacRouter = express.Router();
import { authMiddleware } from '../middlewares/auth.middleware.js';

import sacController from '../controllers/sac.controller.js';

sacRouter.post('/createSac', upload.single("arquivo"),
  (req, res, next) => {
    try {
      if (req.file && req.file.size > 15 * 1024 * 1024) {
        return res.status(400).send({ message: "O arquivo é muito grande. O limite é de 15MB." });
      }
      next(); // Prossegue para o controlador, mesmo sem arquivo
    } catch (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).send({ message: "O arquivo é muito grande. O limite é de 15MB." });
      }
      next(err);
    }
  }, sacController.createSac);

sacRouter.get('/', authMiddleware, sacController.findAllSac);
sacRouter.get('/:assunto', authMiddleware, sacController.findAssuntoSac);
sacRouter.delete('/:id', authMiddleware, sacController.deleteSacById);
sacRouter.patch('/:id', authMiddleware, sacController.updateSacStatus)

export default sacRouter;