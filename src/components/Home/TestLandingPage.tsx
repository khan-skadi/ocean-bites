import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

// Assets
import hero from "assets/images/wallpapers/hero.png";
import ourStory from "assets/images/wallpapers/our-story.png";
import iceCream from "assets/images/wallpapers/ice-cream.png";
import contact from "assets/images/wallpapers/contact.png";
import quote from "assets/images/quote.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    heroWrapper: {
      maxWidth: "100%",
      height: "150px",
      position: "absolute",

      [theme.breakpoints.up("sm")]: {
        height: "600px",
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
      },
    },
    heroCtaWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "100%",
      height: "100%",
      position: "absolute",
      background: "#000",
      top: 140,
      right: 10,

      [theme.breakpoints.up("sm")]: {
        top: 580,
        right: 20,
      },
    },
    heroCta: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "130px",
      height: "60px",
      textAlign: "center",
      border: "1px solid #fff",
      borderRadius: "50%",

      [theme.breakpoints.up("sm")]: {
        width: 294,
        height: 175,
      },

      "& p": {
        fontFamily: "Grotesk",
        fontWeight: 500,
        fontSize: "12px",
        color: "#fff",
        margin: 0,
        padding: 0,

        [theme.breakpoints.up("sm")]: {
          fontSize: "22px",
        },
      },
    },
  })
);

const TestLandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heroWrapper}>
        <img src={hero} alt="" />
      </div>
      <div className={classes.heroCtaWrapper}>
        <div className={classes.heroCta}>
          <p>Where great food and great drinks meet</p>
        </div>
      </div>
    </div>
  );
};

export default TestLandingPage;
