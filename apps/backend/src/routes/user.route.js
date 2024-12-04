import express from "express";
import userController from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);

export default userRouter;