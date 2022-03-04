import express from "express";
const router = express.Router();

import privateRoute from "../middleware/privateRoute.js";

// Validation
import validateInputs from "../middleware/validateInputs.js";
import { projectValidationRules } from "../validation/projectValidationRules.js";
// Controllers
import {
  createNewProject,
  getAllProjectsByUser,
} from "../controllers/projectController.js";

router
  .route("/")
  .post(
    projectValidationRules(),
    validateInputs,
    privateRoute,
    createNewProject
  )
  .get(privateRoute, getAllProjectsByUser);

export default router;
