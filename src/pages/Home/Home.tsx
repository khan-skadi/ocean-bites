import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";

import LandingPage from "components/Home";
import Navbar from "components/Navbar/Navbar";

const useStyles = makeStyles(() =>
  createStyles({
    appWrapper: {
      width: "100%",
      height: "100%",
      background: "rgb(242, 244, 234)",
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.appWrapper}>
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Home;
