import Sac from '../models/Sac.js';

const createService = (body) => Sac.create(body);
const findAllService = () => Sac.find().lean();
const findByAssunto = (assunto) => Sac.find({assunto});


export default {
  createService,
  findAllService,
  findByAssunto
};