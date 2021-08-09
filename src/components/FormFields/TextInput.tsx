import React, { FC } from "react";
import { TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

interface Props {
  onChange: any;
  onBlur: any;
  label: string;
  value: string;
  name: string;
  error: any;
  helperText: any;
  id?: string;
  type?: string;
  fullWidth?: boolean;
}

export const TextInput: FC<Props> = ({
  name,
  label,
  value,
  type,
  error,
  helperText,
  onChange,
  onBlur,
  id,
  fullWidth,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <TextField
      classes={{
        root: classes.formControl,
      }}
      id={id}
      name={name}
      label={label}
      value={value || ""}
      type={type || "text"}
      variant="outlined"
      color="secondary"
      margin="normal"
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      {...rest}
    />
  );
};
