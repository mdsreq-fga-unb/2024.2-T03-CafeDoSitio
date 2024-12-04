import disponibilidadeVisitaController from '../controllers/disponibilidadeVisita.controller.js';
import DisponibilidadeVisita from '../models/DisponibilidadeVisita.js';

const createService = () => Schema.create();

const criarAgendamento = async (data, hora) => {
    const horaMinuto = hora.split(':');

    const dataHora = new Date(data);
    dataHora.setHours(horaMinuto[0], horaMinuto[1]);
    
    const visitas = await DisponibilidadeVisita.find({dataHora: dataHora});
    if(visitas.length != 0){
        throw new Error('A data e horário marcados já estão ocupados.');
    }

    const novaDisponibilidade = new DisponibilidadeVisita({ dataHora: dataHora });
    await novaDisponibilidade.save();
};
//validar campos vaziosd
//validar se data e horário estão ocupados
export default {
    createService,
    criarAgendamento,
};

