import { body } from "express-validator";

export const userRegistrationValidationRules = () => {
  return [
    // Name validation rules
    body("name")
      .not()
      .isEmpty()
      .withMessage("Please enter your name")
      .trim()
      .escape()
      .isLength({ min: 2, max: 30 })
      .withMessage("Your name must be at least 2 characters long")
      .matches(/^[a-z ,.'-]+$/i)
      .withMessage("Please enter a valid name"),

    // Email validation rules
    body("email")
      .not()
      .isEmpty()
      .withMessage("Please enter your email address")
      .normalizeEmail()
      .isEmail()
      .withMessage("Please enter a valid email address"),

    // Password validation rules
    body("password")
      .not()
      .isEmpty()
      .withMessage("Please enter your password")
      .isLength({ min: 6, max: 30 })
      .withMessage("Your password must be at least 6 characters long"),
  ];
};

export const userAuthenticationValidationRules = () => {
  return [
    // Email validation rules
    body("email")
      .not()
      .isEmpty()
      .withMessage("Please enter your email address")
      .normalizeEmail()
      .isEmail()
      .withMessage("Please enter a valid email address"),

    // Password validation rules
    body("password").not().isEmpty().withMessage("Please enter your password"),
  ];
};
