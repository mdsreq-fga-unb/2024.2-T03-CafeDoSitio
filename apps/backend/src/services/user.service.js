import User from "../models/User.js";
import jwt from "jsonwebtoken"

const createService = (body) => User.create(body);
const loginService = (body) => User.findOne(body);
const findService = (filter) => User.find(filter);
const findByIdService = (_id) => User.findById(_id);
const findByIdAndUpdate = (id, updateBody) => User.findByIdAndUpdate(id, updateBody, { new: true }); 
const deleteService = (id) => User.findByIdAndDelete(id);
const generateToken = (id) => jwt.sign({_id: id}, process.env.SECRET_JWT, {expiresIn: 86400});

export default {
  createService,
  loginService,
  findService,
  findByIdService,
  findByIdAndUpdate,
  deleteService,
  generateToken,
}