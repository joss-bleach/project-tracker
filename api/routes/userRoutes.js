import express from "express";
const userRouter = express.Router();

// Controllers
import { postCreateUser } from "../controllers/userController.js";

userRouter.post("/", postCreateUser);

export default userRouter;
