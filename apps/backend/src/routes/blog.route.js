import express from "express";
import blogController from "../controllers/blog.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post('/', authMiddleware, blogController.createBlog);
blogRouter.get('/', blogController.findAllBlog);
blogRouter.delete('/deleteBlog/:id', authMiddleware, blogController.deleteBlog);
blogRouter.patch('/patchBlog/:id', authMiddleware, blogController.patchBlog);

export default blogRouter;