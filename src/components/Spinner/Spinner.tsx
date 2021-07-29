import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    spinnerWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "90px",
    },
  })
);

export const WholesomeSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerWrapper}>
      <Spinner />
    </div>
  );
};

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
