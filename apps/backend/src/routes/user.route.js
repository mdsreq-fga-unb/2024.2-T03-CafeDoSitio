import express from "express";
import userController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);

export default userRouter;