import React, { FC } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { SubCategoryItem } from "models/menu";

const useStyles = makeStyles(() => ({
  gridItem: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "30px",
  },
  itemWrapper: {
    display: "flex",
    flexFlow: "column wrap",
  },
  itemHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      color: "#000",
    },
  },
  itemSub: {
    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.8)",
    },
  },
  subtitle: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    marginTop: "-10px",
    marginBottom: "30px",

    "& p": {
      fontFamily: "Grotesk",
      fontSize: "15px",
      fontWeight: 400,
      textTransform: "uppercase",
      margin: 0,

      "&:nth-child(2)": {
        fontWeight: 600,
        letterSpacing: "0.1em",
      },

      "&:nth-child(3)": {
        marginTop: "10px",
      },

      "&:nth-child(4)": {
        fontWeight: 600,
        letterSpacing: "0.1em",
      },
    },
  },
}));

interface Props {
  items: SubCategoryItem[];
}

const FreshSalads: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.subtitle}>
        <p>Your choice of dressing:</p>
        <p>Ranch, Blue Cheese, Creamy Italian, Caesar, Oil & Vinegar, Balsamic</p>
        <p>Salads are served with:</p>
        <p>Lettuce, Tomatoes, Onions, Sweet Peppers, Green Peppers and Crutons</p>
      </div>
      {items.map((item) => (
        <Grid item key={item.id} className={classes.gridItem} xs={12} sm={6} md={4}>
          <div className={classes.itemWrapper}>
            <div className={classes.itemHead}>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.price && `$${item.price}`}
              </Typography>
            </div>
            <div className={classes.itemSub}>
              <Typography variant="body1" color="textSecondary">
                {(item.ingredients &&
                  Array.isArray(item.ingredients) &&
                  item.ingredients.length &&
                  `(${item.ingredients.join(", ").toString()})`) ||
                  ""}{" "}
              </Typography>
              {item.additional && item.additional.length && (
                <Typography variant="body1" color="textSecondary">
                  {`(${item.additional})`}
                </Typography>
              )}
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default FreshSalads;
