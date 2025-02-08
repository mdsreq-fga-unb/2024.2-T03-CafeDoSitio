import express from "express";
import userController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
<<<<<<< HEAD
userRouter.get('/findUsers/', userController.findUsers);
userRouter.get('findByIdUser', userController.findByIdUser);
userRouter.put('updateUser/:id', userController.findByIdAndUpdate);
userRouter.delete('deleteUser/:id', userController.deleteUser);
=======
userRouter.get('/findUsers', userController.findUsers);
userRouter.get('/findAllUsers', userController.findAllUser);
userRouter.get('findByIdUser', userController.findByIdUser);
userRouter.put('/:id', userController.findByIdAndUpdate);
userRouter.delete('/:id', userController.deleteUser);
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76

export default userRouter;