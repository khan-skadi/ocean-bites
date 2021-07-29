import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useFormik, FormikValues } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Extras } from "models/menu";

// Actions
import { closeModal } from "store";

// Components
import { MenuText } from "components/FormFields";
import { Button } from "@material-ui/core";
import Spinner from "components/Spinner";

// Helpers
import { getFormikFieldProps } from "utils/getFormikFieldProps";

const useStyles = makeStyles(() => ({
  fieldWrapper: {
    display: "flex",
    flexFlow: "row wrap",

    "& div": {
      marginLeft: "10px",
    },
  },
  inputWrapper: {
    width: "200px",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
  actionWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: "20px",
  },
  submitButton: {
    margin: "0 15px",
    minWidth: "150px",
  },
  cancelButton: {
    margin: "0 30px 0 15px",
    minWidth: "150px",
  },
}));

interface Props {
  handleSubmitForm: (values) => void;
  extras: Extras;
  state: {
    [key: string]: string;
  };
  loading: boolean;
}

const EditMenuList: FC<Props> = ({ handleSubmitForm, extras: { list, title }, state, loading }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: state,
    onSubmit: (values: FormikValues) => handleSubmitForm(values),
  });
  const { values, touched, errors, handleReset, handleSubmit } = formik;
  const formikFieldProps = getFormikFieldProps(formik);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <p className={classes.title}>{title}</p>
        <div className={classes.fieldWrapper}>
          {list.map((item) => (
            <div key={item} className={classes.inputWrapper}>
              <MenuText
                id={item}
                name={item}
                label={item}
                value={values[item]}
                error={touched[item] && Boolean(errors[item])}
                helperText={touched[item] && errors[item]}
                formikFieldProps={formikFieldProps[item]}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.actionWrapper}>
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          color="secondary"
          disabled={loading}
          tabIndex={0}
        >
          {loading ? <Spinner /> : "Save"}
        </Button>
        <Button
          className={classes.cancelButton}
          type="button"
          variant="outlined"
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditMenuList;
