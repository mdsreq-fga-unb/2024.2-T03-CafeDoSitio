import Visita from '../models/Visita.js';

const createService = (body) => Visita.create(body);
const findAllService = () => Visita.find();
const findService = (filters) => Visita.find(filters);
const deleteService = (body) => Visita.findByIdAndDelete(body);
const patchService = (_id, body) => Visita.findByIdAndUpdate(_id, body, { new: true });

export default {
    createService,
    findAllService,
    findService,
    deleteService,
    patchService,
};

