import Visita from '../models/Visita.js';

const createService = (body) => Visita.create(body);

export default {
    createService,
};

