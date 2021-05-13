import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const Template = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Template</p>
    </div>
  );
};

export default Template;
