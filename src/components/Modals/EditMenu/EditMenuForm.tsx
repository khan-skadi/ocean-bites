import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useFormik, FormikValues } from "formik";
import { makeStyles } from "@material-ui/core/styles";

// Models
import { SubCategory } from "models/menu";

// Actions
import { closeModal } from "store";

// Components
import { MenuText } from "components/FormFields";
import { Button } from "@material-ui/core";
import Spinner from "components/Spinner";

// Helpers
import { getFormikFieldProps } from "utils/getFormikFieldProps";

const useStyles = makeStyles(() => ({
  formInner: {},
  fieldWrapper: {
    display: "flex",
    flexFlow: "row nowrap",

    "& div": {
      marginLeft: "10px",

      "&:first-child": {
        marginLeft: "-5px",
      },
    },
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
  subCategory: SubCategory;
  state: {
    [key: string]: string;
  };
  loading: boolean;
}

const EditMenuForm: FC<Props> = ({ handleSubmitForm, subCategory, state, loading }) => {
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
      <div className={classes.formInner}>
        <div>
          {subCategory.items.map((item) => (
            <div className={classes.fieldWrapper} key={item.name}>
              <MenuText
                id={`${item.id}`}
                name={item.name}
                label={item.name}
                value={values[item.name]}
                error={touched[item.name] && Boolean(errors[item.name])}
                helperText={touched[item.name] && errors[item.name]}
                formikFieldProps={formikFieldProps[item.name]}
              />
              <MenuText
                id={`${item.name} price`}
                name={`${item.name} price`}
                label="Cost $"
                value={values[`${item.name} price`]}
                error={touched[`${item.name} price`] && Boolean(errors[`${item.name} price`])}
                helperText={touched[`${item.name} price`] && errors[`${item.name} price`]}
                formikFieldProps={formikFieldProps[`${item.name} price`]}
              />
              <MenuText
                id={`${item.name} ingredients`}
                name={`${item.name} ingredients`}
                label="Ingredients"
                value={values[`${item.name} ingredients`]}
                error={touched[`${item.name} ingredients`] && Boolean(errors[`${item.name} ingredients`])}
                helperText={touched[`${item.name} ingredients`] && errors[`${item.name} ingredients`]}
                formikFieldProps={formikFieldProps[`${item.name} ingredients`]}
              />
              <MenuText
                id={`${item.name} additional`}
                name={`${item.name} additional`}
                label="Additional"
                value={values[`${item.name} additional`]}
                error={touched[`${item.name} additional`] && Boolean(errors[`${item.name} additional`])}
                helperText={touched[`${item.name} additional`] && errors[`${item.name} additional`]}
                formikFieldProps={formikFieldProps[`${item.name} additional`]}
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

export default EditMenuForm;
