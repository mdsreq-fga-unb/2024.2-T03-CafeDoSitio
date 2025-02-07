import Produto from "../models/Produto.js";
import Estabelecimento from "../models/Estabelecimento.js";

const buscarPorNome = async (nome) => {
    try {
        return await Produto.find({
            nome: { $regex: new RegExp(nome, "i") } //colocar o nome com essa expressao permite busca sem case-sensitive
        }).populate("estabelecimentos");
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        throw new Error("Erro ao buscar produto");
    }
};

// ✅ Criar Produto
const criarProduto = async (dados) => {
    try {
        return await Produto.create(dados);
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        throw new Error("Erro ao criar produto");
    }
};

// ✅ Associar produto a estabelecimentos (atualizando os dois lados da relação)
const adicionarProdutoAEstabelecimentos = async (produtoId, estabelecimentos) => {
    try {
        for (const estabelecimentoId of estabelecimentos) {
            // Verifica se o estabelecimento existe
            const estabelecimento = await Estabelecimento.findById(estabelecimentoId);
            if (!estabelecimento) {
                console.warn(`Estabelecimento ${estabelecimentoId} não encontrado`);
                continue;
            }

            // Adiciona o estabelecimento ao produto
            await Produto.findByIdAndUpdate(produtoId, { $addToSet: { estabelecimentos: estabelecimentoId } });

            // Adiciona o produto ao estabelecimento
            await Estabelecimento.findByIdAndUpdate(estabelecimentoId, { $addToSet: { produtos: produtoId } });
        }
    } catch (error) {
        console.error("Erro ao associar produto a estabelecimentos:", error);
        throw new Error("Erro ao associar produto a estabelecimentos");
    }
};

export default {
    buscarPorNome,
    criarProduto,
    adicionarProdutoAEstabelecimentos,
};
