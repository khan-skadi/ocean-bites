import React from "react";
import { makeStyles, createStyles, Theme, Container, Grid } from "@material-ui/core";

import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import { ContactForm, Sidebar } from "components/ContactUs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    wrapper: {
      marginTop: "30px",
    },
    sidebar: {},
    form: {},
  })
);

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SecondaryNavbar />
      <div className={classes.wrapper}>
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
    </div>
  );
};

export default ContactUs;
