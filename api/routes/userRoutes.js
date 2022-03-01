import express from "express";
const userRouter = express.Router();

// Validation
import validateInputs from "../middleware/validateInputs.js";
import { userRegistrationValidationRules } from "../validation/userValidationRules.js";

// Controllers
import { registerNewUser } from "../controllers/userController.js";

userRouter.post(
  "/",
  userRegistrationValidationRules(),
  validateInputs,
  registerNewUser
);

export default userRouter;
