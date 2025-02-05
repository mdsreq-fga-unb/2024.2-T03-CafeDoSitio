import localidadeService from "../services/localidade.service.js";

const createLocalidade = async (req, res) => {
    try {
        const { latitude, longitude, nomeLocal, cep, bairro, rua } = req.body;

        if (!latitude || !longitude || !nomeLocal || !cep || !bairro || !rua) {
            res.status(400).send({ message: "Preencha todos os campos!" });
        }

        const localidade = await localidadeService.createService(req.body);

        if (!localidade) {
            return res.status(400).send({ message: "Dados não salvos, apesar da requisição!" });
        }

        return res.status(201).send({ message: "Localidade criada com sucesso!", localidade });
    } catch (err) {
        console.error(err);  // Log de erro detalhado
        return res.status(500).send({ message: err.message });
    }
};

const findAllLocalidades = async (req, res) => {
    const localidades = await localidadeService.findAllService();

    if(localidades.length === 0) {
        return res.status(400).send({message: "Não existe nenhuma localidade cadastrada ainda!"});
    }

    res.status(200).send(localidades);
}

const findAllLocalidadesByEstado = async (req, res) => {
    const estado = req.params.estado;

    const localidades = await localidadeService.findAllByEstadoService(estado);

    if(localidades.length === 0) {
        return res.status(400).send({message: "Não existe nenhuma localidade desse estado cadastrada ainda!"});
    }

    res.status(200).send(localidades);
}

export default {
    createLocalidade,
    findAllLocalidades,
    findAllLocalidadesByEstado
}
