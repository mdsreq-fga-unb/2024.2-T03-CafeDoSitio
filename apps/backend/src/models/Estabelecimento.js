import mongoose, { mongo } from "mongoose";

const EstabelecimentoSchema = new mongoose.Schema({
    nomeEstabelecimento: {
        type: String,
        require: true,
    },
    rua: {
        type: String,
        require: true,
    },
    bairro: {
        type: String,
        require: true,
    },
    cep: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
    latitude: {
        type: Number,
        require: true,
    },
    longitude: {
        type: Number,
        require: true,
    },
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto",
    }]
});

/**
 * 
 * Estabelecimentos
{
  "nomeEstabelecimento": "Taguatinga shopping",
  "rua": "210",
  "bairro": "Areal",
  "cep": "71950-904",
  "estado": "DF",
  "latitude": -15.85149,
  "longitude": -48.03502,
  "produtos": []
}

{
  "nomeEstabelecimento": "Rural",
  "rua": "210",
  "bairro": "Area Rural do Gama",
  "cep": "72499-899",
  "estado": "DF",
  "latitude": -16.01426,
  "longitude": -48.08723,
  "produtos": []
}

    Produtos
{
  "nome": "Café Capuccino",
  "descricao": "Café com leite vaporizado e canela",
  "linha": "Bebidas quentes",
  "estabelecimentos": [
    "65c47e5c2f5d4b001f3f69a1",
    "65c47e5c2f5d4b001f3f69b2"
  ]
}

 */
const Estabelecimento = mongoose.model('Estabelecimento', EstabelecimentoSchema);
export default Estabelecimento;