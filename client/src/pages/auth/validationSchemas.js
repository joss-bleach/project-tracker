import * as yup from "yup";

export const userAuthenticationValidationRules = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: yup.string().required("Please enter your password."),
});
