import mongoose from "mongoose";

const SacSchema = new mongoose.Schema({
  nomeSobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  telefone: {
    type: String,
    require: true,
  },
  assunto: {
    type: String,
    require: true,
  },
  mensagem: {
    type: String,
    require: true,
  }
});

const Sac = mongoose.model('Sac', SacSchema);
export default Sac;