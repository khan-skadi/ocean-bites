import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    width: "100%",
    marginLeft: "-15px",
  },
  title: {
    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontSize: "20px",
      fontWeight: 900,
      color: "#000",

      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    width: "350px",

    "& p": {
      fontFamily: "Grotesk",
      fontSize: "16px",
      fontWeight: 600,
      margin: "5px",
    },
  },
}));

const SubsAndSandwiches = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body1">ALL SUBS and SANDWICHES come with the choice of:</Typography>
      </div>
      <div className={classes.wrapper}>
        <p style={{ marginTop: "20px" }}>Lettuce {String.fromCharCode(183)}</p>
        <p style={{ marginTop: "20px" }}>Tomatoes</p>
        <p style={{ marginTop: "20px" }}>Onions-Fried {String.fromCharCode(183)}</p>
        <p>Onions-Raw</p>
        <p>Hot Peppers {String.fromCharCode(183)}</p>
        <p>Mayo {String.fromCharCode(183)}</p>
        <p>Mustard</p>
        <p>Mushrooms {String.fromCharCode(183)}</p>
        <p>Sweet Peppers</p>
        <p>Green Peppers</p>
        <p>Banana Peppers</p>
        <p>Jalapenos</p>
      </div>
    </div>
  );
};

export default SubsAndSandwiches;
