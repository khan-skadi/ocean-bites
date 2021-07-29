import React, { FC } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
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
}));

interface Props {
  items: SubCategoryItem[];
}

const KidsMenu: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      {items.map((item) => (
        <Grid item key={item.id} className={classes.gridItem} xs={12} sm={8}>
          <div className={classes.itemWrapper}>
            <div className={classes.itemHead}>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.price}
              </Typography>
            </div>
            {item.ingredients && (
              <div className={classes.itemSub}>
                <Typography variant="body1" color="textSecondary">
                  {item.ingredients}
                </Typography>
              </div>
            )}
            {item.additional && (
              <div className={classes.itemSub}>
                <Typography variant="body1" color="textSecondary">
                  {item.additional}
                </Typography>
              </div>
            )}
          </div>
        </Grid>
      ))}
    </>
  );
};

export default KidsMenu;
