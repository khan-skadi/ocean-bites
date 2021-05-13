import React from "react";
import { makeStyles, createStyles, Theme, Button, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik, FormikValues } from "formik";
import { getFormikFieldProps } from "utils/getFormikFieldProps";
import { ALERT_MESSAGES } from "utils/verbiage";

import { Text } from "components/FormFields";
import Alert, { AlertProps } from "components/Alert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    text: {
      display: "flex",
      alignItems: "center",
      marginBottom: "30px",

      "& .MuiTypography-root": {
        fontFamily: "Grotesk",
        fontSize: "16px",
        fontWeight: 600,
        color: theme.palette.secondary.main,
      },
    },
    row: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    submitButton: {
      borderRadius: 0,
      textTransform: "uppercase",
      fontFamily: "Grotesk",
      fontSize: "18px",
    },
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
  REQUIRED: "This field is required",
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
  const [alertProps, setAlertProps] = React.useState<Partial<AlertProps>>({
    open: false,
  });

  const onSubmit = (values: FormikValues) => {
    setAlertProps({
      open: true,
      onClose: () => setAlertProps({ open: false }),
      severity: "success",
      message: ALERT_MESSAGES.formSubmittedSuccessfully,
    });

    setTimeout(() => {
      setAlertProps({
        open: false,
      });
    }, 4000);
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
      <Alert {...alertProps} />
      <div className={classes.text}>
        <Typography variant="body1">For all other questions, please use the form.</Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <Text
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name*"
            value={values.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            formikFieldProps={formikFieldProps.firstName}
          />
          <Text
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name*"
            value={values.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
            formikFieldProps={formikFieldProps.lastName}
          />
        </div>
        <Text
          fullWidth
          id="email"
          name="email"
          label="Email*"
          type="email"
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          formikFieldProps={formikFieldProps.email}
        />
        <Text
          fullWidth
          multiline
          rows={4}
          id="subject"
          name="subject"
          label="Subject*"
          value={values.subject}
          error={touched.subject && Boolean(errors.subject)}
          helperText={touched.subject && errors.subject}
          formikFieldProps={formikFieldProps.subject}
        />
        <Text
          fullWidth
          id="message"
          name="message"
          label="Message*"
          value={values.message}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
          formikFieldProps={formikFieldProps.message}
        />

        <Button type="submit" color="secondary" variant="contained" className={classes.submitButton} fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
