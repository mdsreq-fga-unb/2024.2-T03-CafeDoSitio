import faq from '../models/Faq.js';

const createService = (body) => faq.create(body);
const findAllService = () => faq.find();
const deleteService = (body) => faq.findByIdAnd;
const findByIdAndUpdate = (_id, body) => faq.findByIdAndUpdate(_id, body, {new: true});

export default {
    createService,
    findAllService,
    deleteService,
    findByIdAndUpdate,
}