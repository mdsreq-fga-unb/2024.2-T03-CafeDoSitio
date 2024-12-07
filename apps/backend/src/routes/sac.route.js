import express from 'express';
import upload from "../middlewares/sac.middleware.js"
const sacRouter = express.Router();

import sacController from '../controllers/sac.controller.js';

sacRouter.post('/createSac', sacController.createSac);
sacRouter.post('/sendMail', upload.single("arquivo"), (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).send({ message: "Nenhum arquivo foi enviado ou o tamanho excedeu o limite de 15MB." });
      }
      next();
    } catch (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).send({ message: "O arquivo é muito grande. O limite é de 15MB." });
      }
      next(err);
    }
  }, sacController.sendMail);
  
sacRouter.get('/', sacController.findAllSac);
sacRouter.get('/:assunto', sacController.findAssuntoSac);
sacRouter.delete('/:id', sacController.deleteSacById);

export default sacRouter;