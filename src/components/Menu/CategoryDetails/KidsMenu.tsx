import React from "react";
import { makeStyles, createStyles, Theme, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const KidsMenu = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary">
              Tenders (2)
            </Typography>
            <Typography variant="body1" color="textSecondary">
              5.75
            </Typography>
          </div>
          <div className={classes.itemSub}>
            <Typography variant="body1" color="textSecondary">
              (with French Fries)
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary">
              Slice of Cheese Pizza
            </Typography>
            <Typography variant="body1" color="textSecondary">
              5.75
            </Typography>
          </div>
          <div className={classes.itemSub}>
            <Typography variant="body1" color="textSecondary">
              (and French Fries)
            </Typography>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default KidsMenu;
