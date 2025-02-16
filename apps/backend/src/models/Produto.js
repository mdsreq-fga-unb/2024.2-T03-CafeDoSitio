import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    linha: {
        type: String,
        required: true,
    },
    estabelecimentos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Estabelecimento"
    }]
});

const Produto = mongoose.model("Produto", ProdutoSchema);
export default Produto;