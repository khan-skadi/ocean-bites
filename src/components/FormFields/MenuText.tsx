import React, { FC, forwardRef } from "react";
import { FieldAttributes } from "formik";
import { makeStyles, Theme, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: "24px",
  },
  formControl: {
    "& label": {
      fontFamily: "Grotesk",
      fontSize: "19px",
      fontWeight: 600,
    },

    "& .MuiFormLabel-root.MuiInputLabel-outlined": {
      transform: "translate(20px, 20px) scale(1)",
    },

    "& .MuiFormLabel-root.MuiInputLabel-animated": {
      "&.MuiFormLabel-filled": {
        transform: "translate(21px, -6px) scale(0.65)",
      },

      "&.Mui-focused": {
        transform: "translate(24px, -6px) scale(0.65)",
      },
    },

    "& .MuiFormLabel-filled": {
      color: theme.palette.secondary.main,
    },

    "& .MuiInputBase-root": {
      borderRadius: "2px",

      "& input": {
        fontSize: "16px",
        paddingTop: "12px",
        paddingBottom: "12px",
        height: "28px",
      },
    },
  },
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MenuText: FC<FieldAttributes<any>> = forwardRef((props, ref) => {
  const classes = useStyles();
  const { formikFieldProps, fullWidth, ...restProps } = props;
  const { field, meta } = formikFieldProps;

  return (
    <div className={classes.root}>
      <TextField
        classes={{
          root: classes.formControl,
        }}
        fullWidth={fullWidth}
        variant="outlined"
        color="secondary"
        type={restProps.type || "text"}
        meta={meta}
        valid={(!meta.error).toString()}
        {...field}
        {...restProps}
        innerRef={ref}
      />
    </div>
  );
});
