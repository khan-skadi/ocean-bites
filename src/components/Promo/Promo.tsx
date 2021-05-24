import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import iceCream from "../../assets/images/wallpapers/ice-c.png";

const useStyles = makeStyles((theme: Theme) => ({
  promo: {
    position: "relative",
    background: theme.palette.secondary.light,
    padding: "15px 0",

    [theme.breakpoints.up("md")]: {
      paddingTop: 100,
      paddingBottom: 150,
    },
  },
  promoWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",

    "& p": {
      margin: 0,
      fontFamily: "Grotesk",
      fontWeight: 600,
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: theme.palette.primary.light,

      [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "40px",
      },
    },
  },
  iceCreamWrapper: {
    position: "relative",
    background: theme.palette.secondary.light,
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      paddingTop: "150px",
    },
  },
  iceCreamImageWrapper: {
    position: "absolute",
    width: "220px",
    top: "48px",
    left: "-9px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center right",
    },

    [theme.breakpoints.up("md")]: {
      width: "1000px",
      top: 150,
      left: 0,
    },
  },
  fillerIceCream: {
    minWidth: "200px",

    [theme.breakpoints.up("md")]: {
      minWidth: "55vw",
    },
  },
  iceCreamDescWrapper: {
    position: "relative",
    top: "-245px",

    [theme.breakpoints.down("xs")]: {
      top: "-5px",
    },

    "& p": {
      fontSize: "12px",
      marginRight: "10px",
      color: "#000",

      "&:not(:first-child)": {
        textAlign: "center",
      },
    },

    "& blockquote": {
      color: "#000",
      fontFamily: "Hatton",
      fontSize: "10px",
      textAlign: "end",
      marginTop: "30px",
      marginInlineStart: "2px",
      marginInlineEnd: "10px",
      marginBlockEnd: "0.3em",
    },

    [theme.breakpoints.up("md")]: {
      "& p": {
        fontFamily: "Grotesk",
        fontSize: "36px",

        "&:nth-of-type(3)": {
          width: "80%",
          marginLeft: "35px",
          textAlign: "left",
        },
      },

      "& blockquote": {
        marginTop: "150px",
        fontSize: "22px",
        marginLeft: "395px",
        marginInlineEnd: "40px",
      },
    },
  },
  small: {
    fontFamily: "Hatton",
    display: "inherit",
    fontSize: "10px",
    textAlign: "end",
    marginRight: "10px",
    color: `${theme.palette.primary.light} !important`,

    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      marginRight: "40px",
    },
  },
  iceCreamTitle: {
    fontSize: "16px !important",
    textTransform: "uppercase",
    textAlign: "center",
    color: `${theme.palette.primary.light} !important`,

    [theme.breakpoints.up("md")]: {
      fontSize: "60px !important",
      fontWeight: 500,
    },
  },
}));

const Promo = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.promo}>
        <div className={classes.promoWrapper}>
          <p>We cook the food we love,</p>
          <p>We hope you love it too!</p>
        </div>
      </section>
      <div className={classes.iceCreamWrapper}>
        <div className={classes.iceCreamImageWrapper}>
          <img src={iceCream} alt="" />
        </div>
        <div className={classes.fillerIceCream} />
        <div className={classes.iceCreamDescWrapper}>
          <p className={classes.iceCreamTitle}>Ice Cream</p>
          <p>
            Ocean Bites is your place on the Ocean City Boardwalk for delicious Gelato, perfect to cool you down on a
            hot Summer's day.
          </p>
          <p>It's Italian for Ice Cream, and Native for Delicious!</p>
          <blockquote>Life is like an ice-cream cone, you have to lick it one day at a time.</blockquote>
          <small className={classes.small}>- Ocean Bites</small>
        </div>
      </div>
    </>
  );
};

export default Promo;