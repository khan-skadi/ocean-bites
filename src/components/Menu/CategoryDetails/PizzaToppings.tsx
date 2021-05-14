import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
  },
  title: {
    fontFamily: "Grotesk",
    fontSize: "18px",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  list: {
    listStyle: "circle",
    width: "400px",
    textAlign: "center",
    margin: 0,
    padding: 0,
  },
  listItem: {
    display: "inline",
    whiteSpace: "nowrap",

    "&:after": {
      content: " \u00b7",
    },

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontSize: "18px",
      fontWeight: 400,
      textTransform: "capitalize",
    },
  },
}));

const toppings = [
  "Ham",
  "Banana Peppers",
  "Jalapeno Sausage",
  "Pepperoni",
  "Green Peppers",
  "Onions",
  "Tomatoes",
  "Sweet Peppers",
  "Mushrooms",
];

const PizzaToppings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="body1">Topping of Your Choice:</Typography>
      </div>
      <ul className={classes.list}>
        {toppings.map((topping) => (
          <li key={topping} className={classes.listItem}>
            <a href="#!">{topping}</a>
            {/* <Typography variant="body1">{topping}</Typography> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaToppings;
