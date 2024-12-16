import VisitaService from"../services/visita.service.js";

const createVisita = async (req, res) => {
    try {
        const { startDateTime, endDateTime, status } = req.body;

        if(!startDateTime || !endDateTime || !status)
            return res.status(400).send({ message: "Preencha todos os campos para criar a disponibilidade!"});

        const visita = await VisitaService.createService(req.body);

        if (!visita)
            return res.status(502).send({ message: 'Dados não salvos, apesar da requisição!' });

        return res.status(201).send({ message: "Disponibilidade criada com sucesso!", visita })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao criar disponibilidade.", error: err.message });
    }
};

const findAllVisita = async (req, res) => {
    try {
        const visita = await VisitaService.findAllService();
        
        return res.status(200).send({ message: "Visitas encontradas!", visita });
        
    } catch (err) {
        return res.send(500).send({ message: err.message });
    }
};

const deleteVisita = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id)
            return res.status(400).send({ message: "ID não identificado!"});

        const visita = await VisitaService.deleteService({_id: id});

        if (!visita)
            return res.status(404).send({ message: "Visita não encontrada!" });

        return res.status(200).send({ message: "Visita deletada!", visita });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

const patchVisita = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id)
            return res.status(400).send({ message: "ID não informado!" });

        if (!Object.keys(updateData).length)
            return res.status(400).send({ message: "Nenhuma informação para atualizar!" });

        const updatedVisita = await VisitaService.patchService({ _id: id }, updateData);

        if (!updatedVisita)
            return res.status(404).send({ message: "Visita não encontrada!" });

        return res.status(200).send({ message: "Visita atualizada com sucesso!", updatedVisita });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

export default { 
    createVisita,
    findAllVisita,
    deleteVisita,
    patchVisita,
};


