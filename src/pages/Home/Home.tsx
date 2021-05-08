import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import LandingPage from "components/Home";
import Navbar from "components/Navbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appWrapper: {
      width: "100%",
      height: "100%",
      background: "rgb(30, 31, 32)",
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
