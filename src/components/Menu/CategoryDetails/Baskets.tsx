import React, { FC } from "react";
import { makeStyles, Theme, Typography, Grid } from "@material-ui/core";
import { SubCategoryItem } from "models/menu";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column nowrap",
      width: "100%",
    },
  },
  gridItem: {
    marginTop: "20px",

    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },

    "&:first-child": {
      marginTop: 70,
    },
  },
  itemWrapper: {
    display: "flex",
    paddingRight: "15px",
    marginTop: "20px",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemHead: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "flex-start",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      color: "#000",
    },
  },
  itemSub: {
    display: "flex",
    flexFlow: "column wrap",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.8)",
    },
  },
  imageWrapper: {
    width: "300px",

    [theme.breakpoints.down("xs")]: {
      margin: "40px auto 0",
    },

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  price: {
    fontWeight: 600,
  },
}));

interface Props {
  items: SubCategoryItem[];
}

const Baskets: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        {items.map((item) => (
          <Grid item key={item.id} className={classes.gridItem} xs={12}>
            <div className={classes.itemWrapper}>
              <div className={classes.itemHead}>
                <Typography variant="body1" color="textSecondary">
                  {item.name}
                </Typography>
                <div className={classes.itemSub}>
                  <Typography variant="body1" color="textSecondary">
                    {(item.ingredients &&
                      Array.isArray(item.ingredients) &&
                      item.ingredients.length &&
                      `(${item.ingredients.join(", ").toString()})`) ||
                      ""}
                  </Typography>
                  {item.additional && item.additional.length && (
                    <Typography variant="body1" color="textSecondary">
                      {`(${item.additional})`}
                    </Typography>
                  )}
                </div>
              </div>
              <Typography className={classes.price} variant="body1" color="textPrimary">
                {item.price && `$${item.price}`}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Baskets;
