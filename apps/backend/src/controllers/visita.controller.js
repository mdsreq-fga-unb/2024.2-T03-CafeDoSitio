import DisponibilidadeVisita from "../models/Visita.js";
import VisitaService from"../services/visita.service.js";


const criarDisponibilidade = async (req, res) => {
    try {
        const { data, hora } = req.body;

        if(!data || !hora){
            return res.status(400).json({ message: "Os campos 'data' e 'hora' são obrigatórios."});
        }

        await VisitaService.criarAgendamento(data, hora);

        res.status(201).json({ message: "Disponibilidade criada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: "Erro ao criar disponibilidade.", error: err.message });
    }
};

const listarDisponibilidades = async (req, res) => {
    try {
        const disponibilidades = await DisponibilidadeVisita.find();
        res.status(200).json(disponibilidades);
    }catch (err) {
        res.status(500).json({ message: "Erro ao listar disponibilidades.", error: err.message });
    }
};

const deletarDisponibilidade = async (req, res) => {
    try{
        const { id } = req.params;

        const disponibilidade = await DisponibilidadeVisita.findByIdAndDelete(id);
        if (!disponibilidade){
            return res.status(404).json({ message: "Disponibilidade não encontrada." });
        }

        res.status(200).json({ message: "Disponibilidade deletada com sucesso!"});
    } catch (err){
        res.status(500).json({ message: "Erro ao deletar disponibilidade.", error: err.message });
    }
};

export default { 
    criarDisponibilidade, 
    listarDisponibilidades, 
    deletarDisponibilidade 
};


