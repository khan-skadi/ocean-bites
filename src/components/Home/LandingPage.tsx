import React from "react";

// Assets
import hero from "assets/images/wallpapers/hero.png";
import ourStory from "assets/images/wallpapers/our-story.png"; //eslint-disable-line
import iceCream from "assets/images/wallpapers/ice-cream.png"; //eslint-disable-line
import contact from "assets/images/wallpapers/contact.png"; //eslint-disable-line
import quote from "assets/images/quote.svg"; //eslint-disable-line
import menuItem1 from "assets/images/wallpapers/menu-item-1.png";
import menuItem2 from "assets/images/wallpapers/menu-item-2.png";
import menuItem3 from "assets/images/wallpapers/menu-item-3.png";
import menuItem4 from "assets/images/wallpapers/menu-item-4.png";
import menuItem5 from "assets/images/wallpapers/menu-item-5.png";
import menuItem6 from "assets/images/wallpapers/menu-item-6.png";

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
        <img src={ourStory} alt="" />
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
                <div className={classes.menuItemInner}>
                  <p>{item.name}</p>
                </div>
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
        <img src={contact} alt="" />
      </div>
      <section className={classes.footer}>
        <div className={classes.footerWrapper}>
          <div className={classes.footerTitle}>
            <p>Reach out to us!</p>
          </div>
          <div className={classes.footerSectionWrapper}>
            <div className={classes.footerSection}>
              <p className={classes.footerSectionTitle}>Phone Number</p>
              <p className={classes.footerSectionText}>(410) 289-3007</p>
            </div>
            <div className={classes.footerSection}>
              <p className={classes.footerSectionTitle}>Email Address</p>
              <p className={classes.footerSectionText}>hello@oceanbites.com</p>
            </div>
            <div className={classes.footerSection}>
              <p className={classes.footerSectionTitle}>Location</p>
              <p className={classes.footerSectionText}>3007 Philadelphia Ave, Ocean City, MD21842-3565</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const menuItems = [
  {
    name: "Cold & Hot Subs",
    label: "coldAndHotSubs",
    img: menuItem1,
  },
  {
    name: "Wraps",
    label: "wraps",
    img: menuItem2,
  },
  {
    name: "Pizza",
    label: "pizza",
    img: menuItem3,
  },
  {
    name: "Burgers",
    label: "burgers",
    img: menuItem4,
  },
  {
    name: "Salad",
    label: "salad",
    img: menuItem5,
  },
  {
    name: "Chicken Tenders",
    label: "chickenTenders",
    img: menuItem6,
  },
];

export default LandingPage;
