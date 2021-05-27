import * as Yup from "yup";

const ERRORS = {
  MAX_CHAR_LIMIT: "Must be 15 characters or less",
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email address",
};

export const VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().max(15, ERRORS.MAX_CHAR_LIMIT).required(ERRORS.REQUIRED),
  lastName: Yup.string().max(15, ERRORS.MAX_CHAR_LIMIT).required(ERRORS.REQUIRED),
  email: Yup.string().email(ERRORS.INVALID_EMAIL).required(ERRORS.REQUIRED),
  message: Yup.string().required(ERRORS.REQUIRED),
});
