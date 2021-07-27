import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setAlertProps } from "store";
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
  severity?: MuiAlertProps["severity"];
  message?: string;
}

const Alert: FC<AlertProps> = ({ open, severity, message }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setAlertProps({ open: false }));

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <CustomAlert onClose={handleClose} severity={severity}>
          {message}
        </CustomAlert>
      </Snackbar>
    </div>
  );
};

export default Alert;
