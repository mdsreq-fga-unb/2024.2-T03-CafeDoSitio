import VisitaService from"../services/visita.service.js";

const createVisita = async (req, res) => {
    try {
        const { startDateTime, endDateTime, status } = req.body;

        console.log(req.body);

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
        if(!req._id)
            return res.status(400).send({ message: "ID não identificado!"});

        const visita = await VisitaService.deleteService(_id);

        return res.status(200).send({ message: "Visita deletada!", visita });
    } catch (err) {
        return res.send(500).send({ message: err.message });
    }
}; 

export default { 
    createVisita,
    findAllVisita,
    deleteVisita,
};


