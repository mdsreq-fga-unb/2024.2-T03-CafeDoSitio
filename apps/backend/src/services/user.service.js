import User from "../models/User";

const createService = (body) => User.create(body);
const findOneService = (params) => User.findOne(params);
const updateService = (id, updateBody) => User.findByIdAndUpdate(id, updateBody, { new: true }); 
const deleteService = (id) => User.findByIdAndDelete(id);

export default {
  createService,
  findOneService,
  updateService,
  deleteService,
}