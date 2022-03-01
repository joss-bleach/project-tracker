import express from "express";
const router = express.Router();

import privateRoute from "../middleware/privateRoute.js";

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
  getAuth,
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
router.get("/getAuth", privateRoute, getAuth);

export default router;
