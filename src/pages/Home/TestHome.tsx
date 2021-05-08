import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Navbar from "components/Navbar";

import TestLandingPage from "components/Home";
import TestNavbar from "components/Navbar/TestNavbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appWrapper: {
      width: "100%",
      height: "100%",
    },
  })
);

const TestHome = () => {
  const classes = useStyles();

  return (
    <div className={classes.appWrapper}>
      <TestNavbar />
      <TestLandingPage />
    </div>
  );
};

export default TestHome;
