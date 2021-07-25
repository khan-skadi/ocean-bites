import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/MailOutline";
import { Container, Grid, Typography, Hidden, useMediaQuery, Theme } from "@material-ui/core";
import InstagramList from "components/InstagramList";

import instagram from "assets/images/social/instagram.svg";
import facebook from "assets/images/social/facebook.png";
import antonyTechLogo from "assets/images/logo/digital-black-cut.png";

import { useStyles } from "./styles/LandingFooter.styled";
import { GLOBALS } from "../../utils/appConstants";

const LandingFooter = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

  return (
    <>
      <InstagramList />
      <section className={classes.footer}>
        <Container maxWidth="xl">
          <Grid
            container
            justify="center"
            alignItems="center"
            style={isMobile ? { paddingBottom: "30px" } : { paddingBottom: "60px" }}
          >
            <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
              <div className={classes.footerTitle}>
                <p>Reach out to us!</p>
              </div>
              <div className={classes.contactWrapper}>
                <div className={classes.contactItem}>
                  <PhoneIcon />
                  <Typography variant="body2">
                    <a href="tel:410-289-3007">(410) 289-3007</a>
                  </Typography>
                </div>
                <div className={classes.contactItem}>
                  <MailIcon />
                  <Typography variant="body2">
                    <a href="mailto:hello@oceanbites.com">oceanbites123@gmail.com</a>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
              <div className={classes.hoursWrapper}>
                <Typography variant="body1">Daily Hours</Typography>
                <div className={classes.hoursItem}>
                  <Typography variant="body2">Sun-Thur: 11:00am - 1:30am</Typography>
                  <Typography variant="body2">Fri-Sat: 11:00am - 2:30am</Typography>
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
                    <a href={GLOBALS.instagramLink} target="_blank" rel="noopener noreferrer">
                      <img src={instagram} alt="" />
                    </a>
                  </div>
                  <div className={classes.socialIconWrapper}>
                    <a href={GLOBALS.facebookLink} target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Hidden xsDown>
          <div className={classes.watermarkDesktop}>
            <Typography variant="body1">
              Designed and developed by{" "}
              <a href="https://antonytech.com" target="_blank" rel="noopener noreferrer">
                Antony Tech
              </a>
              . All rights reserved &copy;
            </Typography>
            <a href="https://antonytech.com" target="_blank" rel="noopener noreferrer">
              <img src={antonyTechLogo} alt="Antony Tech Logo" />
            </a>
          </div>
        </Hidden>
      </section>
      <Hidden smUp>
        <div className={classes.watermark}>
          <div>
            <Typography variant="body1">
              Designed and developed by <a href="https://antonytech.com">Antony Tech</a>.
            </Typography>
            <Typography variant="body1">All rights reserved &copy;</Typography>
          </div>
          <div>
            <img src={antonyTechLogo} alt="Antony Tech Logo" />
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default LandingFooter;
