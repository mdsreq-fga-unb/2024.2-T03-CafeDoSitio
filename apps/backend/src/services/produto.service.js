import Produto from "../models/Produto.js";
import Estabelecimento from "../models/Estabelecimento.js";

const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove os acentos
};

const escapeRegExp = (str) => {
    return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&'); // Escapa caracteres especiais
};

const buscarPorNome = async (nome) => {
    try {
        const nomeNormalizado = normalizeString(nome); // Normaliza a string de busca para encontrar com ou sem acentos
        const nomeEscapado = escapeRegExp(nomeNormalizado); // Escapa caracteres especiais
        return await Produto.find({
            nome: { $regex: new RegExp(nomeEscapado, "i") } // Permite busca sem case-sensitive e sem considerar acentos
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
