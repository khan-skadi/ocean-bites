import React from "react";
import heroImage from "assets/images/wallpapers/heroImage.jpg";
import { Parallax } from "react-parallax";

// Components
import Promo from "components/Promo";
import Reviews from "components/Reviews";
import OurStory from "components/OurStory";
import OnTheMenu from "components/OnTheMenu";
import { LandingFooter } from "components/Footer";
import { Button, Link } from "@material-ui/core";

import { useStyles } from "./styles/LandingPage.styles";

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
        <Parallax bgImage={heroImage} strength={400}>
          <div className={classes.heroCTA}>
            <div>
              <p className={classes.textCTA}>
                We deliver with <br />
                <span>uber eats</span>
              </p>
              <Link
                component={Button}
                className={classes.buttonCTA}
                href="https://www.ubereats.com/store/ocean-bites/0XwO_qnsS3qbosjHyVZeVQ?fbclid=IwAR3LzpgKsYEeL6zkwiqQXme5ggsPQqOcNZf8B4WT5661gUm4K0DxqM5Rr6A"
                rel="noopener noreferrer"
                target="_blank"
              >
                Order Now
              </Link>
            </div>
          </div>
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
