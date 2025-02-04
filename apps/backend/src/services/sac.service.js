import Sac from '../models/Sac.js';
import mongoose from 'mongoose';

const createService = (body) => Sac.create(body);
const findAllService = () => Sac.find();  
const findByAssunto = (assunto) => Sac.find({assunto});
const findById = (id) => Sac.findById(id);

const deleteById = (id) => {
  const objectId = new mongoose.Types.ObjectId(id); 
  return Sac.deleteOne({ _id: objectId });
};

const updateSacStatus = (
  id,
  status,
) => 
  Sac.findOneAndUpdate(
  { _id: id },
  { status }
);


export default {
  createService,
  findAllService,
  findByAssunto,
  deleteById,
  findById,
  updateSacStatus
};