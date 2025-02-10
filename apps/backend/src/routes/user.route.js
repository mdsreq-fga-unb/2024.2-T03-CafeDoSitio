import express from "express";
import userController from "../controllers/user.controller.js";
const userRouter = express.Router();
import { authMiddleware } from '../middlewares/auth.middleware.js';

userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
userRouter.get('/findUsers', userController.findUsers);
userRouter.get('/findAllUsers', authMiddleware, userController.findAllUser);
userRouter.get('findByIdUser', userController.findByIdUser);
userRouter.put('/:id', authMiddleware, userController.findByIdAndUpdate);
userRouter.delete('/:id', authMiddleware, userController.deleteUser);

export default userRouter;