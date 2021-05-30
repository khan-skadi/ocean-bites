import React from "react";
import heroImage from "assets/images/wallpapers/heroImage.jpg";
import { Parallax } from "react-parallax";
import axios from "axios";

// Components
import Promo from "components/Promo";
import Reviews from "components/Reviews";
import OurStory from "components/OurStory";
import OnTheMenu from "components/OnTheMenu";
import { LandingFooter } from "components/Footer";

import { useStyles } from "./styles/LandingPage.styles";

// const centeredDivStyle = {
//   background: "#fff",
//   left: "50%",
//   top: "50%",
//   position: "absolute",
//   padding: "20px",
//   transform: "translate(-50%, -50%)",
// };

const appId = "272902864533574";
const clientToken = "e10935696d5e9d8d8c95bfdf342f65cf";

// const igAppId = "218260593222235";
// const igAppSecret = "a18ee59333cced0e6fae66cd1dc475e6";

const LandingPage = () => {
  const classes = useStyles();
  const [data, setData] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");

  const getPosts = async () => {
    const url = "https://www.instagram.com/p/Byh8hYdBSgc/";
    const igUrl = `https://graph.facebook.com/v10.0/instagram_oembed?url=${url}&access_token=${appId}|${clientToken}`;

    const res = await axios.get(igUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setData(res.data.html);
    setThumbnail(res.data.thumbnail_url);
    console.log("res: ", res);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <section className={classes.hero}>
        {/* <div className={classes.heroWrapper}>
          <img src={heroImage} alt="" />
        </div> */}
        <Parallax bgImage={heroImage} strength={400}>
          <div style={{ height: "98vh" }} />
        </Parallax>
        <div>
          <img src={thumbnail} alt="" />
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className={classes.embedWrapper} dangerouslySetInnerHTML={{ __html: data }} />
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
