import Sac from '../models/Sac.js';
import mongoose from 'mongoose';

const createService = (body) => Sac.create(body);
const findAllService = () => Sac.find().lean();
const findByAssunto = (assunto) => Sac.find({assunto});
const deleteById = (id) => {
  const objectId = new mongoose.Types.ObjectId(id); 
  return Sac.deleteOne({ _id: objectId });
};


export default {
  createService,
  findAllService,
  findByAssunto,
  deleteById
};