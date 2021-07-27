import React, { FC } from "react";
import { SubCategoryItem } from "models/menu";
import { makeStyles, Theme, Typography, Grid } from "@material-ui/core";
import IceCreamToppings from "./IceCreamToppings";

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "30px",
  },
  itemWrapper: {
    display: "flex",
    flexFlow: "column wrap",

    "&:nth-of-type(2)": {
      marginTop: "50px",
    },
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
  title: {
    fontFamily: "Grotesk",
    fontWeight: 600,
    textDecoration: "underline",
    textTransform: "capitalize",
    margin: "0 0 20px 20px",
    fontSize: "21px",
    whiteSpace: "nowrap",
  },
  itemBody: {},
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& .MuiTypography-root": {
      color: "#000",
      fontFamily: "Grotesk",
      fontWeight: 600,
      fontSize: "18px",
      marginTop: "8px",

      "&:nth-child(2)": {
        fontSize: "16px",
      },
    },
  },
  priceHeadingWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "40px",
    marginBottom: "10px",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
    },

    "& .MuiTypography-root": {
      margin: 0,
      color: "#000",
      textTransform: "uppercase",
      textDecoration: "underline",
      fontWeight: 600,

      "&:last-child": {
        marginRight: "-10px",

        [theme.breakpoints.down("xs")]: {
          marginRight: 0,
        },
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
      },
    },
  },
  iceCreamWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      color: "#000",
    },

    "& .MuiTypography-root:first-child": {
      width: "60%",
    },
  },
}));

interface Props {
  items: SubCategoryItem[];
}

const IceCream: FC<Props> = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        {items.map(
          (subCategoryItem, index) =>
            index < 2 && (
              <div className={classes.itemWrapper} key={subCategoryItem.id}>
                <div className={classes.itemHead}>
                  <Typography variant="body1" color="textSecondary" className={classes.title}>
                    {subCategoryItem.name}
                  </Typography>
                </div>
                <div>
                  {subCategoryItem?.subItems?.map((subItem) => (
                    <div className={classes.item} key={subItem.id}>
                      <Typography variant="body1" color="textSecondary">
                        {subItem.name}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        $ {subItem.price1}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </Grid>
      <IceCreamToppings />
      <div style={{ width: "100%", marginTop: "50px" }}>
        <div className={classes.itemHead}>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Bites Banana Split
          </Typography>
          <Typography variant="body1" color="textSecondary">
            7.75
          </Typography>
        </div>
        <div className={classes.itemSub} style={{ width: "100%" }}>
          <Typography variant="body1" color="textSecondary">
            (Scoop Vanilla, Scoop Chocolate, Scoop Strawberry Topped With Strawberries, Chocolate Syrup, Whipped Cream
            and Cherries)
          </Typography>
        </div>
      </div>
      <Grid item xs={12} sm={8} className={classes.gridItem}>
        <div className={classes.itemWrapper} style={{ marginTop: "30px" }}>
          {items.map(
            (subCategoryItem, index) =>
              index > 1 && (
                <React.Fragment key={subCategoryItem.id}>
                  <div className={classes.itemHead}>
                    <Typography variant="body1" color="textSecondary" className={classes.title}>
                      {subCategoryItem.name}
                    </Typography>
                  </div>
                  <Grid item xs={12}>
                    <div className={classes.priceHeadingWrapper}>
                      <div style={{ width: "60%" }} />
                      <Typography variant="body1" color="textSecondary">
                        Small
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Large
                      </Typography>
                    </div>
                  </Grid>
                  {subCategoryItem.subItems?.map((subItem) => (
                    <React.Fragment key={subItem.id}>
                      <Grid item xs={12}>
                        <div className={classes.itemWrapper}>
                          <div className={classes.iceCreamWrapper}>
                            <Typography variant="body1" color="textSecondary">
                              {subItem.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                              {subItem.price1 && `$ ${subItem.price1}`}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                              {subItem.price2 && `$ ${subItem.price2}`}
                            </Typography>
                          </div>
                          {subItem.additional && (
                            <div className={classes.itemSub}>
                              <Typography variant="body1" color="textSecondary">
                                {subItem.additional}
                              </Typography>
                            </div>
                          )}
                        </div>
                      </Grid>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              )
          )}
        </div>
      </Grid>
    </>
  );
};

export default IceCream;
