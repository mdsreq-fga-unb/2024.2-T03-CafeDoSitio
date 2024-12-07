import express from "express";
import userController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
userRouter.get('/findUsers/', userController.findUsers);
userRouter.get('findByIdUser', userController.findByIdUser);
userRouter.put('updateUser/:id', userController.findByIdAndUpdate);
userRouter.delete('deleteUser/:id', userController.deleteUser);

export default userRouter;