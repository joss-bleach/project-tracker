import { body } from "express-validator";

export const projectValidationRules = () => {
  return [
    // Name validation rules
    body("name")
      .not()
      .isEmpty()
      .withMessage("Please enter a project name name")
      .trim()
      .escape()
      .isLength({ min: 2, max: 30 })
      .withMessage("Your name must be at least 2 characters long"),

    // Description
    body("description")
      .not()
      .isEmpty()
      .withMessage("Please enter a project description.")
      .trim()
      .escape()
      .isLength({ min: 2 })
      .withMessage("Your description must be longer than 2 characters"),

    // Completion date
    body("completionDate")
      .not()
      .isEmpty()
      .withMessage("Please enter a completion date.")
      .isString()
      .withMessage("Please enter a valid date."),

    // Priority
    body("priority").not().isEmpty().withMessage("Please set a priority"),

    // Status
    body("status").not().isEmpty().withMessage("Please set a status."),

    // Github URL
    body("githubUrl").isURL().withMessage("Please enter a valid URL."),
  ];
};
