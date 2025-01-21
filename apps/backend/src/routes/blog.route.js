import express from "express";
import blogController from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post('/createBlog', blogController.createBlog);
blogRouter.get('/findAllBlog', blogController.findAllBlog);
blogRouter.delete('/deleteBlog/:id', blogController.deleteBlog);
blogRouter.patch('/patchBlog/:id', blogController.patchBlog);

export default blogRouter;