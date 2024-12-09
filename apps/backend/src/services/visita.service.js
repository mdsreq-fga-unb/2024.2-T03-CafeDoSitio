import Visita from '../models/Visita.js';

const createService = (body) => Visita.create(body);
const findAllService = () => Visita.find();
const findService = (filters) => Visita.find(filters);

export default {
    createService,
    findAllService,
    findService,
};

