import VisitaService from"../services/visita.service.js";


const createVisita = async (req, res) => {
    try {
        const { date, startTime, endTime } = req.body;

        if(!date || !startTime || !endTime)
            return res.status(400).json({ message: "Preencha todos os campos para criar a disponibilidade!"});

        const visita = await VisitaService.createService(req.body);

        return res.status(201).send({ message: "Disponibilidade criada com sucesso!", visita })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao criar disponibilidade.", error: err.message });
    }
};

export default { 
    createVisita, 
};


