import React from "react";
import heroImage from "assets/images/wallpapers/heroImage.jpg";
import { Parallax } from "react-parallax";

// Components
import Promo from "components/Promo";
import Reviews from "components/Reviews";
import OurStory from "components/OurStory";
import OnTheMenu from "components/OnTheMenu";
import { LandingFooter } from "components/Footer";

import { useStyles } from "./LandingPage.styles";

// const centeredDivStyle = {
//   background: "#fff",
//   left: "50%",
//   top: "50%",
//   position: "absolute",
//   padding: "20px",
//   transform: "translate(-50%, -50%)",
// };

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.hero}>
        {/* <div className={classes.heroWrapper}>
          <img src={heroImage} alt="" />
        </div> */}
        <Parallax bgImage={heroImage} strength={400}>
          <div style={{ height: "98vh" }} />
        </Parallax>
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
