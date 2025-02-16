import Estabelecimento from "../models/Estabelecimento.js";
import Produto from "../models/Produto.js";

// ✅ Criar um novo estabelecimento
const createService = async (dados) => {
    try {
        return await Estabelecimento.create(dados);
    } catch (error) {
        console.error("Erro ao criar estabelecimento:", error);
        throw new Error("Erro ao criar estabelecimento");
    }
};

// ✅ Buscar todos os estabelecimentos
const findAllService = () => Estabelecimento.find().populate("produtos");

// ✅ Buscar estabelecimentos por estado
const findAllByEstadoService = (estado) => Estabelecimento.find({ estado }).populate("produtos");

// ✅ Associar produtos ao estabelecimento (atualizando os dois lados)
const associarProdutos = async (estabelecimentoId, produtos) => {
    try {
        // Verifica se os produtos existem antes de adicionar
        const produtosValidos = await Produto.find({ _id: { $in: produtos } });

        if (produtosValidos.length === 0) {
            console.warn(`Nenhum produto válido encontrado para o estabelecimento ${estabelecimentoId}`);
            return;
        }

        // Adiciona os produtos ao estabelecimento
        await Estabelecimento.findByIdAndUpdate(estabelecimentoId, { $addToSet: { produtos: produtosValidos.map(p => p._id) } });

        // Adiciona o estabelecimento a cada produto
        for (const produto of produtosValidos) {
            await Produto.findByIdAndUpdate(produto._id, { $addToSet: { estabelecimentos: estabelecimentoId } });
        }
    } catch (error) {
        console.error("Erro ao associar produtos ao estabelecimento:", error);
        throw new Error("Erro ao associar produtos ao estabelecimento");
    }
};

export default {
    createService,
    findAllService,
    findAllByEstadoService,
    associarProdutos
};
