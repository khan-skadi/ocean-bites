import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

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
  })
);

const Snacks = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary">
              Nacho & Cheese
            </Typography>
            <Typography variant="body1" color="textSecondary">
              3.00
            </Typography>
          </div>
          <div className={classes.itemSub}>
            <Typography variant="body1" color="textSecondary" />
          </div>
        </div>
      </Grid>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary">
              Chips
            </Typography>
            <Typography variant="body1" color="textSecondary">
              1.69
            </Typography>
          </div>
          <div className={classes.itemSub}>
            <Typography variant="body1" color="textSecondary" />
          </div>
        </div>
      </Grid>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary">
              Cup of Cheese
            </Typography>
            <Typography variant="body1" color="textSecondary">
              .75
            </Typography>
          </div>
          <div className={classes.itemSub}>
            <Typography variant="body1" color="textSecondary" />
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Snacks;
