import VisitaService from"../services/visita.service.js";

const createVisita = async (req, res) => {
    try {
        const { startDateTime, endDateTime } = req.body;

        if(!startDateTime || !endDateTime)
            return res.status(400).json({ message: "Preencha todos os campos para criar a disponibilidade!"});

        const visita = await VisitaService.createService(req.body);

        if (!visita)
            return res.status(502).send({ message: 'Dados não salvos, apesar da requisição!' });

        return res.status(201).send({ message: "Disponibilidade criada com sucesso!", visita })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao criar disponibilidade.", error: err.message });
    }
};

const findAllVisita = async (req, body) => {
    try {
        const visita = await VisitaService.findAllService();

        return res.send(200).send({ message: "Visitas encontradas!", visita });
    } catch (err) {
        return res.send(500).send({ message: err.message });
    }
}

export default { 
    createVisita,
    findAllVisita,
};


