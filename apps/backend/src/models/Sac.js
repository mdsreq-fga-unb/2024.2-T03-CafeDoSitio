import mongoose from "mongoose";

const SacSchema = new mongoose.Schema({
  nomeSobrenome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  assunto: {
    type: String,
    required: true,
  },
  mensagem: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  }
});

const Sac = mongoose.model('Sac', SacSchema);
export default Sac;