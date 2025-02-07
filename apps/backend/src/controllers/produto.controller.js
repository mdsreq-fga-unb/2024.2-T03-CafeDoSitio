import produtoService from "../services/produto.service.js";

const criarProduto = async (req, res) => {
    try {
        const { nome, descricao, linha, estabelecimentos } = req.body;

        // ✅ Validação correta dos campos obrigatórios
        if (!nome || !descricao || !linha) {
            return res.status(400).send({ message: "Preencha todos os campos obrigatórios!" });
        }

        // ✅ Criar produto sem os estabelecimentos ainda vinculados
        const produto = await produtoService.criarProduto({ nome, descricao, linha });

        if (!produto) {
            return res.status(400).send({ message: "Dados não salvos, apesar da requisição!" });
        }

        // ✅ Se houver estabelecimentos, associá-los ao produto
        if (estabelecimentos && estabelecimentos.length > 0) {
            await produtoService.adicionarProdutoAEstabelecimentos(produto._id, estabelecimentos);
        }

        return res.status(201).send({
            message: "Produto registrado com sucesso!",
            produto,
        });
    } catch (err) {
        console.error("Erro ao criar produto:", err);
        return res.status(500).send({ message: "Erro interno no servidor" });
    }
};

const buscarProdutoPorNome = async (req, res) => {
    try {
        const nome = req.params.nome;

        if (!nome) {
            return res.status(400).send({ message: "O nome do produto é obrigatório!" });
        }

        const produtos = await produtoService.buscarPorNome(nome);

        if (!produtos || produtos.length === 0) {
            return res.status(404).send({ message: "Nenhum produto encontrado com esse nome." });
        }

        return res.status(200).send(produtos);
    } catch (err) {
        console.error("Erro ao buscar produto:", err);
        return res.status(500).send({ message: "Erro interno no servidor" });
    }
};



export default {
    criarProduto,
    buscarProdutoPorNome
}