import * as yup from "yup";

export const userAuthenticationValidationRules = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: yup.string().required("Please enter your password."),
});

export const userRegistrationValidationRules = yup.object({
  name: yup
    .string()
    .required("Please enter your name.")
    .min(2, "Your name must be at least 2 characters long.")
    .max(30, "Your name must be less than 30 characters long.")
    .matches(/^[a-z ,.'-]+$/i, "Please enter a valid name."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: yup.string().required("Please enter your password."),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .min(6, "Your password must be at least 6 characters long.")
    .max(30, "Your password must be less than 30 characters long.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});
