import React from "react";
import { Link as NavLink } from "react-router-dom";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import { PATHS } from "utils/appConstants";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/MailOutline";

// Assets
import pizza from "assets/images/menu-items/img8.jpg";
import hero from "assets/images/wallpapers/hero.png";
import footerImg from "assets/images/wallpapers/our-story.png";
import iceCream from "assets/images/wallpapers/ice-c.png";
import menuItem1 from "assets/images/wallpapers/menu-item-1.png";
import menuItem2 from "assets/images/wallpapers/menu-item-2.png";
import menuItem3 from "assets/images/wallpapers/menu-item-3.png";
import menuItem4 from "assets/images/wallpapers/menu-item-4.png";
import menuItem5 from "assets/images/wallpapers/menu-item-5.png";
import menuItem6 from "assets/images/wallpapers/menu-item-6.png";
import instagram from "assets/images/social/instagram.svg";
import facebook from "assets/images/social/facebook.png";

import { useStyles } from "./LandingPage.styles";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      {/* Hero */}
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

      {/* Our Story */}
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
        <img src={pizza} alt="" />
      </div>

      {/* On The Menu */}
      <section className={classes.onTheMenu}>
        <div className={classes.onTheMenuWrapper}>
          <p className={classes.onTheMenuTitle}>On The Menu</p>
        </div>
      </section>
      <div className={classes.menuCategoriesWrapper}>
        <ul className={classes.menuList}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <div
                className={classes.menuItem}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <Link className={classes.menuItemLink} component={NavLink} to={item.link}>
                  <div className={classes.menuItemInner}>
                    <p>{item.name}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.clearFix} />

      {/* Cook The Food We Love */}
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

      {/* Reviews */}
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

      <div className={classes.fillerBlack} />

      {/* Footer */}
      <div className={classes.footerImageWrapper}>
        <img src={footerImg} alt="" />
      </div>
      <section className={classes.footer}>
        <Container maxWidth="xl">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
              <div className={classes.footerTitle}>
                <p>Reach out to us!</p>
              </div>
              <div className={classes.contactWrapper}>
                <div className={classes.contactItem}>
                  <PhoneIcon />
                  <Typography variant="body2">(410) 289-3007</Typography>
                </div>
                <div className={classes.contactItem}>
                  <MailIcon />
                  <Typography variant="body2">hello@oceanbites.com</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
              <div className={classes.hoursWrapper}>
                <Typography variant="body1">Daily Hours</Typography>
                <div className={classes.hoursItem}>
                  <Typography variant="body2">Sun-Thur: 10:00am - 3:30am</Typography>
                  <Typography variant="body2">Fri-Sat: 10:00am - 4:00am</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
              <div className={classes.locationWrapper}>
                <Typography variant="body1">Location</Typography>
                <div className={classes.locationItem}>
                  <Typography variant="body2">3007 Philadelphia Ave, Ocean City, MD 21842-3565</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
              <div className={classes.socialWrapper}>
                <Typography variant="body1">Follow Us</Typography>
                <div className={classes.socialItem}>
                  <div className={classes.socialIconWrapper}>
                    <img src={instagram} alt="" />
                  </div>
                  <div className={classes.socialIconWrapper}>
                    <img src={facebook} alt="" />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

const menuItems = [
  {
    name: "Cold & Hot Subs",
    label: "coldAndHotSubs",
    link: PATHS.menuItems.hotAndColdSubs,
    img: menuItem1,
  },
  {
    name: "Wraps",
    label: "wraps",
    link: PATHS.menuItems.wraps,
    img: menuItem2,
  },
  {
    name: "Pizza",
    label: "pizza",
    link: PATHS.menuItems.pizza,
    img: menuItem3,
  },
  {
    name: "Burgers",
    label: "burgers",
    link: PATHS.menuItems.wraps,
    img: menuItem4,
  },
  {
    name: "Salad",
    label: "salad",
    link: PATHS.menuItems.salads,
    img: menuItem5,
  },
  {
    name: "Chicken Tenders",
    label: "chickenTenders",
    link: PATHS.menuItems.appetizers,
    img: menuItem6,
  },
];

export default LandingPage;
