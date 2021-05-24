import React from "react";
import { makeStyles, createStyles, Theme, Typography, Grid } from "@material-ui/core";
import IceCreamToppings from "./IceCreamToppings";

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
  })
);

const IceCream = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.gridItem} xs={12} sm={8}>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary" className={classes.title}>
              Hand Dipped Ice Cream
            </Typography>
          </div>
          <div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                Small - One Dip
              </Typography>
              <Typography variant="body1" color="textSecondary">
                4.00
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                Regular - Two Dips
              </Typography>
              <Typography variant="body1" color="textSecondary">
                5.25
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                Soft Serve Ice Cream
              </Typography>
              <Typography variant="body1" color="textSecondary">
                4.00
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                With Sprinkles (Add)
              </Typography>
              <Typography variant="body1" color="textSecondary">
                .50
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.itemWrapper}>
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary" className={classes.title}>
              Sundaes
            </Typography>
          </div>
          <div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                One Scoop One Topping
              </Typography>
              <Typography variant="body1" color="textSecondary">
                4.50
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                Two Scoop Two Toppings
              </Typography>
              <Typography variant="body1" color="textSecondary">
                5.75
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="body1" color="textSecondary">
                Extra Toppings
              </Typography>
              <Typography variant="body1" color="textSecondary">
                .50
              </Typography>
            </div>
          </div>
        </div>
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
          <div className={classes.itemHead}>
            <Typography variant="body1" color="textSecondary" className={classes.title}>
              Italian Ice
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
          <Grid item xs={12}>
            <div className={classes.itemWrapper}>
              <div className={classes.iceCreamWrapper}>
                <Typography variant="body1" color="textSecondary">
                  Homemade
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  3.75
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  4.75
                </Typography>
              </div>
              <div className={classes.itemSub}>
                <Typography variant="body1" color="textSecondary">
                  (Lots of Flavors)
                </Typography>
              </div>
            </div>
          </Grid>
        </div>
        <Grid item xs={12}>
          <div className={classes.itemWrapper}>
            <div className={classes.iceCreamWrapper}>
              <Typography variant="body1" color="textSecondary">
                Gelato
              </Typography>
              <Typography variant="body1" color="textSecondary">
                3.75
              </Typography>
              <Typography variant="body1" color="textSecondary">
                5.75
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.itemWrapper}>
            <div className={classes.iceCreamWrapper}>
              <Typography variant="body1" color="textSecondary">
                Bites Thick Shakes
              </Typography>
              <Typography variant="body1" color="textSecondary" />
              <Typography variant="body1" color="textSecondary">
                5.50
              </Typography>
            </div>
            <div className={classes.itemSub}>
              <Typography variant="body1" color="textSecondary">
                (With Whipped Cream and Cheery)
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.itemWrapper}>
            <div className={classes.iceCreamWrapper}>
              <Typography variant="body1" color="textSecondary">
                Soda Floats
              </Typography>
              <Typography variant="body1" color="textSecondary" />
              <Typography variant="body1" color="textSecondary">
                4.25
              </Typography>
            </div>
            <div className={classes.itemSub}>
              <Typography variant="body1" color="textSecondary">
                (Any Ice Cream and Soda)
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default IceCream;
