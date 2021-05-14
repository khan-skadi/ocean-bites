import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const SubsAndSandwiches = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Subs and sandwiches</p>
    </div>
  );
};

export default SubsAndSandwiches;
