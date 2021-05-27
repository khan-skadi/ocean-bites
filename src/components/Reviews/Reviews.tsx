import React from "react";
import { Hidden } from "@material-ui/core";
import { useStyles } from "./styles/Reviews.styles";

const Reviews = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.reviews}>
        <div className={classes.reviewsWrapper}>
          <p>Reviews</p>
        </div>
      </section>
      <Hidden xsDown>
        <div className={classes.reviewsInnerWrapper}>
          <div className={classes.reviewCard}>
            <p className={classes.reviewTitle}>Great Place!</p>
            <p className={classes.reviewText}>
              We love Ocean Bites! They have such a big menu to please everyone! Last year we went for breakfast about 4
              days that week and lunch about 3 days. This year, we went late at night and loved it just as much! Great
              food, great selection, great workers. Would recommend it to anyone vacationing to Ocean City!
            </p>
          </div>
          <div className={classes.reviewCard}>
            <p className={classes.reviewTitle}>Convenient and a great menu!</p>
            <p className={classes.reviewText}>
              Located one block off the beach and right next door to Jolly Roger's, this small eatery has an extensive
              offering of subs, pizzas, burgers and dozens of dessert options. Pizza is excellent and there is plenty of
              indoor seating.
            </p>
          </div>
          <div className={classes.reviewCard}>
            <p className={classes.reviewTitle}>Great Find!</p>
            <p className={classes.reviewText}>
              We were looking for a quick light lunch. I had a grilled cheese sandwich that was very good. My friend had
              a salad that was fresh and had a variety of things in it. We had ice cream that was very good as well. The
              service was quick and given with a pleasant smile.
            </p>
          </div>
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.horizontalWrapper}>
          <div className={classes.horizontalInner}>
            <p className={classes.reviewTitle}>Great Place!</p>
            <p className={classes.reviewText}>
              We love Ocean Bites! They have such a big menu to please everyone! Last year we went for breakfast about 4
              days that week and lunch about 3 days. This year, we went late at night and loved it just as much! Great
              food, great selection, great workers. Would recommend it to anyone vacationing to Ocean City!
            </p>
          </div>
          <div className={classes.horizontalInner}>
            <p className={classes.reviewTitle}>Convenient and a great menu!</p>
            <p className={classes.reviewText}>
              Located one block off the beach and right next door to Jolly Roger's, this small eatery has an extensive
              offering of subs, pizzas, burgers and dozens of dessert options. Pizza is excellent and there is plenty of
              indoor seating.
            </p>
          </div>
          <div className={classes.horizontalInner}>
            <p className={classes.reviewTitle}>Great Find!</p>
            <p className={classes.reviewText}>
              We were looking for a quick light lunch. I had a grilled cheese sandwich that was very good. My friend had
              a salad that was fresh and had a variety of things in it. We had ice cream that was very good as well. The
              service was quick and given with a pleasant smile.
            </p>
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default Reviews;
