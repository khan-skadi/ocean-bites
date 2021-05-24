import React from "react";
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
      <section className={classes.hero}>
        <div className={classes.heroWrapper}>
          <img src={heroImage} alt="" />
        </div>
      </section>

      <OurStory />
      <OnTheMenu />
      <div className={classes.clearFix} />
      <Promo />
      <Reviews />

      <LandingFooter />
    </>
  );
};

export default LandingPage;
