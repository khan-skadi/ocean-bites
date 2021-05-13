import React from "react";
import { makeStyles, createStyles, Theme, Button } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik, FormikValues } from "formik";
import { getFormikFieldProps } from "utils/getFormikFieldProps";

import { Text } from "components/FormFields";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ERRORS = {
  MAX_CHAR_LIMIT: "Must be 15 characters or less",
  REQUIRED: "Required",
  INVALID_EMAIL: "Invalid email address",
};

const VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().max(15, ERRORS.MAX_CHAR_LIMIT).required(ERRORS.REQUIRED),
  lastName: Yup.string().max(15, ERRORS.MAX_CHAR_LIMIT).required(ERRORS.REQUIRED),
  email: Yup.string().email(ERRORS.INVALID_EMAIL).required(ERRORS.REQUIRED),
  subject: Yup.string().max(15, ERRORS.MAX_CHAR_LIMIT).required(ERRORS.REQUIRED),
  message: Yup.string().required(ERRORS.REQUIRED),
});

const ContactForm = () => {
  const classes = useStyles();

  const onSubmit = (values: FormikValues) => {
    console.log("values: ", values);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit,
  });
  const { values, touched, errors, handleSubmit } = formik;
  const formikFieldProps = getFormikFieldProps(formik);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Text
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={values.firstName}
          error={touched.firstName && Boolean(errors.firstName).toString()}
          helperText={touched.firstName && errors.firstName}
          formikFieldProps={formikFieldProps.firstName}
        />
        <Text
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={values.lastName}
          error={touched.lastName && Boolean(errors.lastName).toString()}
          helperText={touched.lastName && errors.lastName}
          formikFieldProps={formikFieldProps.lastName}
        />
        <Text
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          value={values.email}
          error={touched.email && Boolean(errors.email).toString()}
          helperText={touched.email && errors.email}
          formikFieldProps={formikFieldProps.email}
        />
        <Text
          fullWidth
          multiline
          rows={4}
          id="subject"
          name="subject"
          label="Subject"
          value={values.subject}
          error={touched.subject && Boolean(errors.subject).toString()}
          helperText={touched.subject && errors.subject}
          formikFieldProps={formikFieldProps.subject}
        />
        <Text
          fullWidth
          id="message"
          name="message"
          label="Message"
          value={values.message}
          error={touched.message && Boolean(errors.message).toString()}
          helperText={touched.message && errors.message}
          formikFieldProps={formikFieldProps.message}
        />

        <Button color="secondary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
