import React, { FC } from "react";
import { makeStyles, Theme, Grid, Typography } from "@material-ui/core";
import { SubCategoryItem } from "models/menu";

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  itemWrapper: {
    display: "flex",
    flexFlow: "column wrap",
  },
  itemHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "15px",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontSize: "16px",
      fontWeight: 600,
      color: "#000",

      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },

      "&:first-child": {
        width: "60%",
        fontSize: "20px",

        [theme.breakpoints.down("xs")]: {
          fontSize: "16px",
        },
      },
    },
  },
  itemSub: {
    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.8)",
      width: "60%",
    },
  },
  priceHeading: {},
  priceHeadingWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "15px",
    marginBottom: "30px",

    "& .MuiTypography-root": {
      margin: 0,
      color: "#000",
      textTransform: "uppercase",
      textDecoration: "underline",
      fontWeight: 600,

      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
        marginRight: "8px",
      },
    },
  },
}));

interface Props {
  items: SubCategoryItem[];
}

const HotAndColdSubs: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.priceHeading} xs={12}>
        <div className={classes.priceHeadingWrapper}>
          <div style={{ width: "60%" }} />
          <Typography variant="body1" color="textSecondary">
            7" Small
          </Typography>
          <Typography variant="body1" color="textSecondary">
            13" Large
          </Typography>
        </div>
      </Grid>
      {items.map((item) => (
        <Grid item key={item.id} className={classes.gridItem} xs={12}>
          <div className={classes.itemWrapper}>
            <div className={classes.itemHead}>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                ${item.price}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                ${item.additional}
              </Typography>
            </div>
            <div className={classes.itemSub}>
              <Typography variant="body1" color="textSecondary">
                {(item.ingredients?.length && `(${item.ingredients.join(", ").toString()})`) || ""}
              </Typography>
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default HotAndColdSubs;
