import React from "react";
import { makeStyles, createStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() =>
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

const NormalList = ({ items }) => {
  const classes = useStyles();

  return items.map((item) => (
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
            {(item.ingredients && item.ingredients.length && `(${item.ingredients.join(", ").toString()})`) || ""}
          </Typography>
          {item.additional && item.additional.length && (
            <Typography variant="body1" color="textSecondary">
              {`(${item.additional})`}
            </Typography>
          )}
        </div>
      </div>
    </Grid>
  ));
};

export default NormalList;
