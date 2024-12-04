import disponibilidadeVisitaController from '../controllers/disponibilidadeVisita.controller.js';
import DisponibilidadeVisita from '../models/DisponibilidadeVisita.js';

const createService = () => Schema.create();

const criarAgendamento = async (data, hora) => {
    const horaMinuto = hora.split(':');

    data.setHours(horaMinuto[0], horaMinuto[1]);
    const novaDisponibilidade = new DisponibilidadeVisita({ data });

    const visitas = await DisponibilidadeVisita.find({dataHora: data});
    if(visitas.length != 0){
        throw new Error('A data e horário marcados já estão ocupados.');
    }

    await novaDisponibilidade.save();
};
//validar campos vaziosd
//validar se data e horário estão ocupados
export default {
    createService,
    criarAgendamento,
};

