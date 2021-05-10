import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

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
        filter: "brightness(95%)",
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
        fontFamily: "Hatton",
        fontWeight: 500,
        fontSize: "12px",
        color: "#000",
        margin: 0,
        padding: 0,
        width: "100%",

        [theme.breakpoints.up("sm")]: {
          width: "90%",
          fontSize: "22px",
        },
      },
    },
    clearFix: {
      "&:after": {
        content: '""',
        clear: "both",
        display: "table",
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

      [theme.breakpoints.up("md")]: {
        paddingTop: "150px",
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

      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
      },
    },
    ourStoryText: {
      color: "#fff",
      fontFamily: "Hatton",

      [theme.breakpoints.up("md")]: {
        margin: "0 auto",
      },

      "& p": {
        fontSize: "10px",
        margin: 0,
        marginTop: theme.spacing(0.5),

        [theme.breakpoints.up("sm")]: {
          fontSize: "16px",
          marginRight: theme.spacing(4),
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
      position: "relative",
      top: 150,
      background: "#000",

      [theme.breakpoints.up("sm")]: {
        height: "600px",
        top: 600,
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
        filter: "brightness(95%)",
      },
    },
    onTheMenu: {
      position: "relative",
      background: "#000",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },

      [theme.breakpoints.up("md")]: {
        paddingTop: 200,
        paddingBottom: 40,
      },
    },
    onTheMenuWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    onTheMenuTitle: {
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "#fff",
      fontFamily: "Grotesk",
      textAlign: "center",

      [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
        margin: 0,
      },
    },
    menuCategoriesWrapper: {
      position: "relative",
      top: 150,
      background: "#000",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },
    },
    menuList: {
      margin: 0,
      padding: 0,
      listStyle: "none",

      "& li": {
        float: "left",
        width: "33.3333%",
        height: "150px",

        [theme.breakpoints.up("sm")]: {
          height: 400,
        },
      },
    },
    menuItem: {
      width: "100%",
      height: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    menuItemInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "50px",
      textAlign: "center",
      border: "1px solid #fff",
      borderRadius: "50%",

      [theme.breakpoints.up("sm")]: {
        width: 295,
        height: 140,
      },

      "& p": {
        fontFamily: "Hatton",
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
    promo: {
      position: "relative",
      background: "#000",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },

      [theme.breakpoints.up("md")]: {
        paddingTop: 40,
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
        fontSize: "18px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        color: "#fff",
        fontFamily: "Grotesk",

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
      top: 150,
      background: "#fff",
      display: "flex",

      [theme.breakpoints.up("sm")]: {
        top: 600,
        paddingTop: "150px",
        paddingBottom: "150px",
      },
    },
    iceCreamImageWrapper: {
      position: "absolute",
      width: "249px",
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
        left: 50,
      },
    },
    fillerIceCream: {
      minWidth: "230px",

      [theme.breakpoints.up("md")]: {
        minWidth: "55vw",
      },
    },
    iceCreamDescWrapper: {
      position: "relative",

      "& p": {
        fontSize: "12px",
        marginRight: "10px",

        "&:not(:first-child)": {
          textAlign: "center",
        },
      },

      "& blockquote": {
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

      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
        marginRight: "40px",
      },
    },
    iceCreamTitle: {
      fontSize: "16px !important",
      textTransform: "uppercase",
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        fontSize: "60px !important",
        fontWeight: 500,
      },
    },
    reviews: {
      position: "relative",
      background: "#fff",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
        paddingTop: "300px",
      },
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
        color: "#000",
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
      top: 150,
      background: "#fff",
      display: "flex",
      width: "100%",
      paddingLeft: "15px",
      paddingRight: "15px",

      [theme.breakpoints.up("sm")]: {
        top: 600,
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

      [theme.breakpoints.up("md")]: {
        fontSize: "26px",
        fontWeight: 500,
      },
    },
    reviewText: {
      fontSize: "11px",

      [theme.breakpoints.up("md")]: {
        fontSize: "26px",
        fontWeight: 400,
        margin: 0,
      },
    },
    footerImageWrapper: {
      maxWidth: "100%",
      height: "150px",
      position: "relative",
      top: 150,
      background: "#000",

      [theme.breakpoints.up("sm")]: {
        height: "600px",
        top: 600,
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
        filter: "brightness(95%)",
      },
    },
    footer: {
      position: "relative",
      background: "#000",
      color: "#fff",
      top: 150,
      padding: "40px 0 80px",

      [theme.breakpoints.up("sm")]: {
        top: 600,
        padding: "100px 0 300px",
      },
    },
    footerWrapper: {
      display: "flex",
      alignItems: "center",
      flexFlow: "row wrap",
      marginLeft: "30px",

      [theme.breakpoints.up("sm")]: {
        justifyContent: "stretch",
        flexFlow: "row wrap",
        marginLeft: "30px",
      },

      [theme.breakpoints.up("md")]: {
        justifyContent: "stretch",
        flexFlow: "row nowrap",
        marginLeft: "50px",
      },
    },
    footerTitle: {
      fontSize: "28px",
      fontWeight: 600,
      fontFamily: "Grotesk",
      textTransform: "uppercase",
      width: "50%",

      "& p": {
        margin: 0,
      },

      [theme.breakpoints.up("sm")]: {
        width: "35%",
        fontSize: "40px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "60px !important",
        width: "25%",
      },
    },
    footerSectionWrapper: {
      display: "flex",
      flexFlow: "column wrap",

      [theme.breakpoints.up("sm")]: {
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },

      [theme.breakpoints.up("md")]: {
        flexFlow: "row nowrap",
        justifyContent: "space-evenly",
        width: "100%",
      },
    },
    footerSection: {
      margin: "20px 0",

      [theme.breakpoints.up("sm")]: {
        margin: 0,
        marginTop: "30px",
        display: "flex",
        flexFlow: "column wrap",
      },

      [theme.breakpoints.up("md")]: {
        display: "block",
      },

      "& p": {
        margin: 0,
        fontFamily: "Grotesk",
        fontSize: "14px",
      },
    },
    footerSectionTitle: {
      fontWeight: 600,

      [theme.breakpoints.up("md")]: {
        fontSize: "26px !important",
      },
    },
    footerSectionText: {
      fontWeight: 400,

      [theme.breakpoints.up("md")]: {
        fontSize: "26px !important",
      },
    },
    fillerBlack: {
      width: "100%",
      height: "300px",
      background: "#000",
      position: "relative",
      top: "600px",

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

const TestLandingPage = () => {
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

export default TestLandingPage;
