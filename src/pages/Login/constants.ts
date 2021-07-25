import * as Yup from "yup";

const ERRORS = {
  EMAIL_REQUIRED: "Email is required",
  PASSWORD_REQUIRED: "Password is required",
};

export const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Email must be a valid field').required(ERRORS.EMAIL_REQUIRED),
  password: Yup.string().required(ERRORS.PASSWORD_REQUIRED),
});
