import estabelecimentoService from "../services/estabelecimento.service.js";

const createEstabelecimento = async (req, res) => {
    try {
        const { latitude, longitude, nomeEstabelecimento, cep, bairro, rua, produtos, estado } = req.body;

        // ✅ Validação correta dos campos obrigatórios
        if (!latitude || !longitude || !nomeEstabelecimento || !cep || !bairro || !rua || !estado) {
            return res.status(400).send({ message: "Preencha todos os campos obrigatórios!" });
        }

        // ✅ Criar estabelecimento (sem produtos inicialmente)
        const estabelecimento = await estabelecimentoService.createService({
            latitude,
            longitude,
            nomeEstabelecimento,
            cep,
            bairro,
            rua,
            estado,
            produtos: [] // Começa sem produtos
        });

        if (!estabelecimento) {
            return res.status(400).send({ message: "Erro ao salvar o estabelecimento!" });
        }

        // ✅ Se houver produtos, associá-los ao estabelecimento
        if (produtos && produtos.length > 0) {
            await estabelecimentoService.associarProdutos(estabelecimento._id, produtos);
        }

        return res.status(201).send({
            message: "Estabelecimento criado com sucesso!",
            estabelecimento
        });

    } catch (err) {
        console.error("Erro ao criar estabelecimento:", err);
        return res.status(500).send({ message: "Erro interno no servidor" });
    }
};

const findAllEstabelecimentos = async (req, res) => {
    const estabelecimentos = await estabelecimentoService.findAllService();

    if(estabelecimentos.length === 0) {
        return res.status(400).send({message: "Nenhum estabelecimento cadastrado ainda!"});
    }

    res.status(200).send(estabelecimentos);
}

const findAllEstabelecimentosByEstado = async (req, res) => {
    const estado = req.params.estado;

    const estabelecimentos = await estabelecimentoService.findAllByEstadoService(estado);

    if(estabelecimentos.length === 0) {
        return res.status(400).send({message: "Nenhum estabelecimento encontrado nesse estado!"});
    }

    res.status(200).send(estabelecimentos);
}

export default {
    createEstabelecimento,
    findAllEstabelecimentos,
    findAllEstabelecimentosByEstado
};
