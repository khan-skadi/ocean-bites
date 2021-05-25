import React, { useState } from "react";
import firebase from "config/firebase";
import { useFormik, FormikValues } from "formik";
import { getFormikFieldProps } from "utils/getFormikFieldProps";
import { ALERT_MESSAGES } from "utils/verbiage";

import { Button, Typography } from "@material-ui/core";
import { Text } from "components/FormFields";
import Alert, { AlertProps } from "components/Alert";

import { VALIDATION_SCHEMA } from "./constants";
import { useStyles } from "./styles/ContactForm.styles";

const sendEmail = firebase.functions().httpsCallable("sendEmail");

const ContactForm = () => {
  const classes = useStyles();
  const [alertProps, setAlertProps] = React.useState<Partial<AlertProps>>({
    open: false,
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FormikValues) => {
    const data = {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      message: `Subject: ${values.subject}. Message: ${values.message}`,
    };

    // const url = "https://us-central1-ocean-bites.cloudfunctions.net/sendEmail";
    // try {
    //   await axios.post(url, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
    setLoading(true);
    sendEmail(data)
      .then((res) => {
        console.log("res: ", res);
        setAlertProps({
          open: true,
          onClose: () => setAlertProps({ open: false }),
          severity: "success",
          message: ALERT_MESSAGES.formSubmittedSuccessfully,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setAlertProps({
          open: true,
          onClose: () => setAlertProps({ open: false }),
          severity: "error",
          message: ALERT_MESSAGES.errorSubmittingForm,
        });
        setLoading(false);
      });
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
          <div className={classes.halfWidthLeft}>
            <Text
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={values.firstName}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              formikFieldProps={formikFieldProps.firstName}
            />
          </div>
          <div className={classes.halfWidthRight}>
            <Text
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={values.lastName}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              formikFieldProps={formikFieldProps.lastName}
            />
          </div>
        </div>
        <Text
          fullWidth
          id="email"
          name="email"
          label="Email"
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
          label="Subject"
          value={values.subject}
          error={touched.subject && Boolean(errors.subject)}
          helperText={touched.subject && errors.subject}
          formikFieldProps={formikFieldProps.subject}
        />
        <Text
          fullWidth
          id="message"
          name="message"
          label="Message"
          value={values.message}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
          formikFieldProps={formikFieldProps.message}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          className={classes.submitButton}
          disabled={loading}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default ContactForm;
