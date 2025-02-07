import produtoController from "../controllers/produto.controller.js";
import express from "express";

const produtoRouter = express.Router();

produtoRouter.post('/criarProduto', produtoController.criarProduto);

export default produtoRouter;