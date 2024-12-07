import mongoose from "mongoose";

const DisponibilidadeVisitaSchema = new mongoose.Schema({
    dataHora: {
        type: Date,
        require: true,
    }
});

const DisponibilidadeVisita = mongoose.model("DisponibilidadeVisita", DisponibilidadeVisitaSchema);

export default DisponibilidadeVisita;
