import express from "express";
import blogController from "../controllers/blog.controller.js";

const blogFilterRouter = express.Router();

blogFilterRouter.get("/", blogController.filterBlogsController);
blogFilterRouter.get("/basic", blogController.filterBlogsBasicUserController);

export default blogFilterRouter;