import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
      fontWeight: 900,
      textTransform: "uppercase",
      color: "#000",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    width: "300px",

    "& p": {
      fontFamily: "Grotesk",
      fontSize: "16px",
      fontWeight: 600,
      margin: "5px",
    },
  },
}));

const PizzaToppings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body1">Topping of Your Choice:</Typography>
      </div>
      <div className={classes.wrapper}>
        <p style={{ marginTop: "20px" }}>Ham {String.fromCharCode(183)}</p>
        <p style={{ marginTop: "20px" }}>Sausage</p>
        <p>Pepperoni {String.fromCharCode(183)}</p>
        <p>Tomatoes</p>
        <p>Mushroom {String.fromCharCode(183)}</p>
        <p>Banana Pepper {String.fromCharCode(183)}</p>
        <p>Jalapeños</p>
        <p>Sweet Pepper {String.fromCharCode(183)}</p>
        <p>Green Pepper</p>
        <p>Onions</p>
      </div>
    </div>
  );
};

export default PizzaToppings;
