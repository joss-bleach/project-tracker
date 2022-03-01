import express from "express";
const router = express.Router();

// Validation
import validateInputs from "../middleware/validateInputs.js";
import {
  userRegistrationValidationRules,
  userAuthenticationValidationRules,
} from "../validation/userValidationRules.js";

// Controllers
import {
  registerNewUser,
  authenticateUser,
} from "../controllers/userController.js";

router.post(
  "/",
  userRegistrationValidationRules(),
  validateInputs,
  registerNewUser
);
router.post(
  "/authenticate/",
  userAuthenticationValidationRules(),
  validateInputs,
  authenticateUser
);

export default router;
