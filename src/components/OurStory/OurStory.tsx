import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import peopleEatingPizza from "assets/images/wallpapers/peopleEatingPizza.png";

const useStyles = makeStyles((theme: Theme) => ({
  ourStory: {
    background: theme.palette.secondary.light,
    padding: "15px 0 0",
  },
  ourStoryWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      flexFlow: "column wrap",
      justifyContent: "center",
    },
  },
  ourStoryTitle: {
    fontFamily: "Grotesk",
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: theme.palette.primary.light,
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      fontSize: "26px",
      margin: 0,
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "80px",
    },
  },
  ourStoryText: {
    color: "#000",
    fontFamily: "Hatton",
    marginBottom: "20px",

    [theme.breakpoints.up("md")]: {
      margin: "30px auto 10px",
    },

    "& p": {
      fontSize: "10px",
      margin: 0,
      marginTop: theme.spacing(0.5),
      textAlign: "center",

      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
        marginRight: theme.spacing(4),
        textAlign: "start",
      },

      [theme.breakpoints.up("md")]: { fontSize: "26px" },

      "&:last-of-type": {
        marginTop: "20px",

        [theme.breakpoints.up("md")]: { marginTop: "50px" },
      },
    },
  },
  ourStoryImageWrapper: {
    maxWidth: "100%",
    height: "150px",
    overflow: "hidden",
    position: "relative",
    background: "#000",

    [theme.breakpoints.up("sm")]: {
      minHeight: "600px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    filter: "brightness(95%)",
  },
}));

const OurStory = () => {
  const classes = useStyles();

  return (
    <>
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
      <div className={classes.ourStoryImageWrapper}>
        <img className={classes.image} src={peopleEatingPizza} alt="" />
      </div>
    </>
  );
};

export default OurStory;
