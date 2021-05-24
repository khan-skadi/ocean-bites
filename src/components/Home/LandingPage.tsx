import React from "react";
import { Link as NavLink } from "react-router-dom";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import { PATHS } from "utils/appConstants";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/MailOutline";

// Assets
import footerImg from "assets/images/wallpapers/our-story.png";
import iceCream from "assets/images/wallpapers/ice-c.png";
import instagram from "assets/images/social/instagram.svg";
import facebook from "assets/images/social/facebook.png";

// New Assets
import heroImage from "assets/images/newImages/IMG_0031.jpg";

// Components
import Promo from "components/Promo";
import Reviews from "components/Reviews";
import OurStory from "components/OurStory";
import OnTheMenu from "components/OnTheMenu";
import { LandingFooter } from "components/Footer";

import { useStyles } from "./LandingPage.styles";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      {/* Hero */}
      <section className={classes.hero}>
        <div className={classes.heroWrapper}>
          <img src={heroImage} alt="" />
        </div>
        {/** <div className={classes.heroCtaWrapper}>
         <div className={classes.heroCta}>
         <p>Where great food and great drinks meet</p>
         </div>
         </div> */}
      </section>

      <OurStory />
      <OnTheMenu />

      <div className={classes.clearFix} />

      <Promo />

      <Reviews />

      {/* <div className={classes.fillerBlack} /> */}
      <LandingFooter />
    </>
  );
};

export default LandingPage;
