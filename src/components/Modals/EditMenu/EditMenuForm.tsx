import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { FormikValues, Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";

// Models
import { SubCategory } from "models/menu";

// Actions
import { closeModal } from "store";

// Components
import { TextInput } from "components/FormFields";
import { Button } from "@material-ui/core";
import Spinner from "components/Spinner";

const useStyles = makeStyles(() => ({
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
    margin: "20px 15px 0",
    minWidth: "150px",
  },
  cancelButton: {
    margin: "20px 8px 0 15px",
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

  return (
    <Formik initialValues={state} onSubmit={(values: FormikValues) => handleSubmitForm(values)}>
      {({ values, touched, errors, handleBlur, handleChange, setFieldValue, handleReset }) => (
        <Form>
          <div>
            <div>
              {console.log('values: ', values)}
              {subCategory.items.map((item) => (
                <div className={classes.fieldWrapper} key={item.name}>
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`${item.id}`}
                    name={item.name}
                    label={item.name}
                    value={values[item.name]}
                    error={touched[item.name] && Boolean(errors[item.name])}
                    helperText={touched[item.name] && errors[item.name]}
                  />
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`${item.name} price`}
                    name={`${item.name} price`}
                    label="Cost $"
                    value={values[`${item.name} price`]}
                    error={touched[`${item.name} price`] && Boolean(errors[`${item.name} price`])}
                    helperText={touched[`${item.name} price`] && errors[`${item.name} price`]}
                  />
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`${item.name} ingredients`}
                    name={`${item.name} ingredients`}
                    label="Ingredients"
                    value={values[`${item.name} ingredients`]}
                    error={touched[`${item.name} ingredients`] && Boolean(errors[`${item.name} ingredients`])}
                    helperText={touched[`${item.name} ingredients`] && errors[`${item.name} ingredients`]}
                  />
                  <TextInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={`${item.name} additional`}
                    name={`${item.name} additional`}
                    label="Additional"
                    value={values[`${item.name} additional`]}
                    error={touched[`${item.name} additional`] && Boolean(errors[`${item.name} additional`])}
                    helperText={touched[`${item.name} additional`] && errors[`${item.name} additional`]}
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
        </Form>
      )}
    </Formik>
  );
};

export default EditMenuForm;
