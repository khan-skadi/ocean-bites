import React, { FC, forwardRef } from "react";
import { FieldAttributes } from "formik";
import { makeStyles, createStyles, Theme, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Text: FC<FieldAttributes<any>> = forwardRef((props, ref) => {
  const classes = useStyles();
  const { formikFieldProps, ...restProps } = props;
  const { field, meta } = formikFieldProps;

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
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
