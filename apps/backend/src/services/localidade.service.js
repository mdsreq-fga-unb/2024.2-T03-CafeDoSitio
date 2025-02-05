import Localidade from "../models/Localidade.js";
import mongoose from "mongoose";

const createService = (body) => Localidade.create(body);
const findAllService = () => Localidade.find();
const findAllByEstadoService = (estado) => Localidade.find({estado});

export default {
    createService,
    findAllService,
    findAllByEstadoService
}