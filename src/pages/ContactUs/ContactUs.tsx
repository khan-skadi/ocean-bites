import React from "react";
import { makeStyles, createStyles, Container, Theme, Grid, useMediaQuery } from "@material-ui/core";
import classnames from "classnames";

import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import { ContactForm, Sidebar } from "components/ContactUs";
import Footer from "components/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    wrapper: {
      marginTop: "30px",

      [theme.breakpoints.down("xs")]: {
        marginTop: "87px",
      },
    },
    sidebar: {},
    form: {},
    marginBottom: {
      marginBottom: "200px",
    },
  })
);

const ContactUs = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <SecondaryNavbar />
      <div
        className={classnames(classes.wrapper, {
          [classes.marginBottom]: isMobile,
        })}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <div className={classes.sidebar}>
                <Sidebar />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className={classes.form}>
                <ContactForm />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer position={isMobile ? "static" : "fixed"} spacing="50px" />
    </div>
  );
};

export default ContactUs;
