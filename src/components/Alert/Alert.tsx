import React, { FC, SyntheticEvent } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps as MuiAlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";

function CustomAlert(props: MuiAlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",

    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export interface AlertProps {
  open?: boolean;
  onClose?: (event: SyntheticEvent<Element, Event>) => void;
  severity?: MuiAlertProps["severity"];
  message?: string;
}

const Alert: FC<AlertProps> = ({ open, onClose, severity, message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <CustomAlert onClose={onClose} severity={severity}>
          {message}
        </CustomAlert>
      </Snackbar>
    </div>
  );
};

export default Alert;
