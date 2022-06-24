import express from "express";

import { UserController } from "./userController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.put('/edit',userController.editUser )