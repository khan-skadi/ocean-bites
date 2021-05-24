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
  },
  title: {
    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontSize: "20px",
      textTransform: "uppercase",
      color: "#000",
      textAlign: "center",

      "&:first-child": {
        fontWeight: 900,
      },

      "&:last-child": {
        fontWeight: 400,
        textDecoration: "underline",
        textTransform: "lowercase",
        fontStyle: "italic",
      },
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    width: "500px",
    marginTop: "20px",

    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },

    "& p": {
      fontFamily: "Grotesk",
      fontSize: "16px",
      fontWeight: 600,
      margin: "5px",
    },
  },
}));

const IceCreamToppings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body1">Your choice of toppings:</Typography>
        <Typography variant="body1">whipped cream and cherry included.</Typography>
      </div>
      <div className={classes.wrapper}>
        <p>Hot Fudge {String.fromCharCode(183)}</p>
        <p>Chocolate Syrup {String.fromCharCode(183)}</p>
        <p>Strawberry {String.fromCharCode(183)}</p>
        <p>Peanut Butter</p>
        <p>Wet Walnuts {String.fromCharCode(183)}</p>
        <p>Marshmallows {String.fromCharCode(183)}</p>
        <p>Oreo Crush {String.fromCharCode(183)}</p>
        <p>Caramel {String.fromCharCode(183)}</p>
        <p>M&Ms</p>
      </div>
    </div>
  );
};

export default IceCreamToppings;
