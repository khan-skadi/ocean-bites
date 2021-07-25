import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";
import { useFormik, FormikValues } from "formik";
import { makeStyles, Theme } from "@material-ui/core/styles";

// Components
import { Button } from "@material-ui/core";
import { Text } from "components/FormFields";

// Helpers
import { PATHS } from "utils/appConstants";
import { getFormikFieldProps } from "utils/getFormikFieldProps";
import { VALIDATION_SCHEMA } from "./constants";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column wrap",
    width: "100%",
    padding: "50px",
  },
  titleText: {
    fontFamily: "Hatton",
    fontSize: "24px",
    color: theme.palette.primary.light,
  },
  form: {
    minWidth: "360px",
    maxWidth: "540px",

    "& > *": {
      margin: "10px 0",
    },
  },
  submitButton: {
    background: theme.palette.primary.light,
    color: "#fff",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, login } = useAuthContext();

  const onSubmit = (values: FormikValues) => {
    login(values.email, values.password);
    history.push(PATHS.home);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    validateOnBlur: false,
    validateOnMount: false,
    onSubmit,
  });
  const { values, touched, errors, handleSubmit } = formik;
  const formikFieldProps = getFormikFieldProps(formik);

  console.log("currentUser: ", currentUser);

  return (
    <div className={classes.root}>
      <p className={classes.titleText}>Login to Ocean Bites</p>

      <form className={classes.form} onSubmit={handleSubmit}>
        <Text
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          formikFieldProps={formikFieldProps.email}
        />
        <Text
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
          value={values.password}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          formikFieldProps={formikFieldProps.password}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          className={classes.submitButton}
          disabled={
            (touched.email && (!values.email || !!errors.email)) ||
            (touched.password && (!values.password || !!errors.password))
          }
          fullWidth
        >
          Login
        </Button>
      </form>
    </div>
  );
};

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export default Login;
