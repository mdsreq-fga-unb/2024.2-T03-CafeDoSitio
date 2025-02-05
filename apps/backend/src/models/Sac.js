import mongoose from "mongoose";
import crypto from "crypto";
import Counter from "./Counter.js";

const SacSchema = new mongoose.Schema({
  incrementalId: {
    type: Number,
    unique: true,
  },
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
  },
});

// Middleware para gerar o incrementalId antes de salvar
SacSchema.pre("save", async function (next) {
  if (!this.incrementalId) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { model: "Sac" }, // Modelo do qual queremos incrementar o ID
        { $inc: { seq: 1 } }, // Incrementa o campo `seq` em 1
        { new: true, upsert: true } // Cria o documento se não existir
      );
      this.incrementalId = counter.seq;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const Sac = mongoose.model('Sac', SacSchema);
export default Sac;
