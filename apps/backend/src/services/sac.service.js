import Sac from '../models/Sac.js';

const createService = (body) => Sac.create(body);

export default {
  createService,
};