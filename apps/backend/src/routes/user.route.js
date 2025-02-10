import express from "express";
import userController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
userRouter.get('/findUsers', userController.findUsers);
userRouter.get('/findAllUsers', userController.findAllUser);
userRouter.get('/findByIdUser/:id', userController.findByIdUser);
userRouter.put('/:id', userController.findByIdAndUpdate);
userRouter.put('/findByIdAndUpdatePassword/:id', userController.findByIdAndUpdatePassword);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;