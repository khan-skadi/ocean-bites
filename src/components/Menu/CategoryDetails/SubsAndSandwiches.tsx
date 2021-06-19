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
      color: theme.palette.primary.light,

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
  listDescription: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "18px",
    color: "#000",
    margin: "40px 0 0",
  },
}));

const SubsAndSandwiches = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body1">ALL SUBS and SANDWICHES come with the choice of:</Typography>
      </div>
      <div>
        <p className={classes.listDescription}>No charge:</p>
        <div className={classes.wrapper}>
          <p>Mayo {String.fromCharCode(183)}</p>
          <p>Lettuce {String.fromCharCode(183)}</p>
          <p>Tomatoes {String.fromCharCode(183)}</p>
          <p>Onions</p>
          <p>Hot Peppers</p>
        </div>

        <p className={classes.listDescription}>$0.50 each:</p>
        <div className={classes.wrapper}>
          <p>Sweet Peppers {String.fromCharCode(183)}</p>
          <p>Pickles {String.fromCharCode(183)}</p>
          <p>Jalapeños</p>
          <p>Green Peppers {String.fromCharCode(183)}</p>
          <p>Mushrooms {String.fromCharCode(183)}</p>
          <p>Banana Peppers</p>
        </div>
      </div>
    </div>
  );
};

export default SubsAndSandwiches;
