import express from "express";
import blogController from "../controllers/blog.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post('/', authMiddleware, blogController.createBlog);
blogRouter.get('/:id', blogController.findBlogById);
blogRouter.delete('/:id', authMiddleware, blogController.deleteBlog);
blogRouter.patch('/:id', authMiddleware, blogController.patchBlog);
blogRouter.get('/slug/:slug', blogController.findOneBySlug);

export default blogRouter;