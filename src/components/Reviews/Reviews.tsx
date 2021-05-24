import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  reviews: {
    position: "relative",
    background: theme.palette.secondary.light,
    padding: "15px 0",
  },
  reviewsWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",

    "& p": {
      margin: 0,
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: theme.palette.primary.light,
      fontWeight: 600,
      fontFamily: "Grotesk",

      [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
        letterSpacing: 6.3,
        fontWeight: 600,
        paddingBottom: "50px",
      },
    },
  },
  reviewsInnerWrapper: {
    position: "relative",
    background: theme.palette.secondary.light,
    display: "flex",
    flexFlow: "column wrap",
    textAlign: "center",
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "50px",

    [theme.breakpoints.up("sm")]: {
      flexFlow: "row nowrap",
      textAlign: "start",
    },
  },
  review: {
    display: "flex",
    flexFlow: "column wrap",
    flexBasis: "33.3333%",
    margin: "0 5px",

    [theme.breakpoints.up("md")]: {
      paddingLeft: "50px",
      paddingRight: "50px",
      marginBottom: "300px",
    },
  },
  reviewTitle: {
    textTransform: "uppercase",
    fontSize: "11px",
    color: "#000",
    marginTop: "20px",
    marginBottom: 0,
    letterSpacing: "0.14em",

    [theme.breakpoints.up("md")]: {
      fontSize: "26px",
      fontWeight: 500,
      margin: "12px 0",
    },
  },
  reviewText: {
    fontSize: "11px",
    fontWeight: 300,
    color: "#000",

    [theme.breakpoints.up("md")]: {
      fontSize: "26px",
      fontWeight: 300,
      margin: 0,
    },
  },
}));

const Reviews = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.reviews}>
        <div className={classes.reviewsWrapper}>
          <p>Reviews</p>
        </div>
      </section>
      <div className={classes.reviewsInnerWrapper}>
        <div className={classes.review}>
          <p className={classes.reviewTitle}>Great Place!</p>
          <p className={classes.reviewText}>
            We love Ocean Bites! They have such a big menu to please everyone! Last year we went for breakfast about 4
            days that week and lunch about 3 days. This year, we went late at night and loved it just as much! Great
            food, great selection, great workers. Would recommend it to anyone vacationing to Ocean City!
          </p>
        </div>
        <div className={classes.review}>
          <p className={classes.reviewTitle}>Convenient and a great menu!</p>
          <p className={classes.reviewText}>
            Located one block off the beach and right next door to Jolly Roger's, this small eatery has an extensive
            offering of subs, pizzas, burgers and dozens of dessert options. Pizza is excellent and there is plenty of
            indoor seating.
          </p>
        </div>
        <div className={classes.review}>
          <p className={classes.reviewTitle}>Great Find!</p>
          <p className={classes.reviewText}>
            We were looking for a quick light lunch. I had a grilled cheese sandwich that was very good. My friend had a
            salad that was fresh and had a variety of things in it. We had ice cream that was very good as well. The
            service was quick and given with a pleasant smile.
          </p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
