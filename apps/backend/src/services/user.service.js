import User from "../models/User.js";
import jwt from "jsonwebtoken"

const createService = (body) => User.create(body);
const loginService = (body) => User.findOne(body);
const findAllService = () => User.find();
const findService = (query) => User.find(query);
const findByIdService = (_id) => User.findById(_id);
const findByIdAndUpdate = (id, updateBody) => User.findByIdAndUpdate(id, updateBody, { new: true }); 
const deleteService = (id) => User.findByIdAndDelete(id);
const generateToken = (user) => {
  const payload = {
    sub: user[0].id,
    name: user[0].name,
    email: user[0].email,
    sector: user[0].sector,
  };
  return jwt.sign(payload, process.env.SECRET_JWT, {expiresIn: "1h"});
}

export default {
  createService,
  loginService,
  findService,
  findAllService,
  findByIdService,
  findByIdAndUpdate,
  deleteService,
  generateToken,
}