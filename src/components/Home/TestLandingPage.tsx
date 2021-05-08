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
    hero: {
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
        filter: "brightness(75%)",
      },
    },
    heroCtaWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "100%",
      height: "100%",
      position: "absolute",
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
      width: "140px",
      height: "60px",
      textAlign: "center",
      border: "1px solid #fff",
      borderRadius: "50%",

      [theme.breakpoints.up("sm")]: {
        width: 295,
        height: 140,
      },

      "& p": {
        fontFamily: "Grotesk",
        fontWeight: 500,
        fontSize: "12px",
        color: "#fff",
        margin: 0,
        padding: 0,
        width: "100%",

        [theme.breakpoints.up("sm")]: {
          width: "90%",
          fontSize: "22px",
        },
      },
    },
    ourStory: {
      position: "relative",
      background: "#000",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },
    },
    ourStoryWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ourStoryTitle: {
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "#fff",
      fontFamily: "Grotesk",
      marginRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),

      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        fontSize: "26px",
      },
    },
    ourStoryText: {
      color: "#fff",
      fontFamily: "Grotesk",

      "& p": {
        fontSize: "10px",
        margin: 0,
        marginTop: theme.spacing(0.5),

        [theme.breakpoints.up("sm")]: {
          fontSize: "16px",
          marginRight: theme.spacing(4),
        },

        "&:last-of-type": {
          marginTop: "20px",
        },
      },
    },
  })
);

const TestLandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroWrapper}>
          <img src={hero} alt="" />
        </div>
        <div className={classes.heroCtaWrapper}>
          <div className={classes.heroCta}>
            <p>Where great food and great drinks meet</p>
          </div>
        </div>
      </section>
      <section className={classes.ourStory}>
        <div className={classes.ourStoryWrapper}>
          <p className={classes.ourStoryTitle}>Our Story</p>
          <div className={classes.ourStoryText}>
            <p>We have been serving irresistible comfort food since 1985.</p>
            <p>Our mission is to keep you smiling with every bite.</p>
            <p>Treat yourself to a feel-good meal today!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestLandingPage;
