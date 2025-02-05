import mongoose from "mongoose";

const LocalidadeSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        require: true,
    },
    longitude: {
        type: Number,
        require: true,
    },
    nomeLocal: {
        type: String,
        require: true,
    },
    cep: {
        type: String,
        require: true,
    },
    Rua: {
        type: String,
        require: true,
    },
    bairro: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
});

const Localidade = mongoose.model('Localidade', LocalidadeSchema);
export default Localidade;