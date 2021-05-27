import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      margin: "100px auto 0",

      [theme.breakpoints.down("xs")]: {
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "0 auto",
      },
    },
    title: {
      fontFamily: "Grotesk",
      fontSize: "24px",
      fontWeight: 600,
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "0 auto",
    },
    secondLocTitle: {
      fontFamily: "Grotesk",
      fontSize: "24px",
      fontWeight: 600,
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "30px auto 0",
    },
    addressWrapper: {
      margin: "20px 0",

      "& .MuiTypography-root": {
        fontSize: "18px",
      },

      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
    description: {
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "17px",
      color: "#000",

      "& a": {
        fontFamily: "Grotesk",
        fontWeight: 400,
        fontSize: "17px",
        color: "#000",
        textDecoration: "none",
      },
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "10px",
    },
    contactTextInner: {
      textAlign: "left",
    },
    icon: {
      marginRight: "10px",
      color: theme.palette.primary.light,
    },
    phone: {
      marginTop: "4px",
    },
    marginTop: {
      marginTop: "20px",
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" color="textSecondary" className={classes.title}>
        Contact Us
      </Typography>
      <div className={classes.addressWrapper}>
        <div className={classes.wrapper}>
          <LocationOnIcon fontSize="large" className={classes.icon} />
          <div className={classes.contactTextInner}>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              3007 Philadelphia Ave,
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              Ocean City,
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              MD 21842-3565
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <PhoneIcon fontSize="large" className={classes.icon} />
        <Typography variant="body1" color="textSecondary" className={classnames(classes.description, classes.phone)}>
          <a href="tel:410-289-3007">(410) 289-3007</a>
        </Typography>
      </div>
      <div className={classnames(classes.wrapper, classes.marginTop)}>
        <MailOutlineIcon fontSize="large" className={classes.icon} />
        <Typography variant="body1" color="textSecondary" className={classnames(classes.description, classes.phone)}>
          <a href="mailto:oceanbites123@gmail.com">oceanbites123@gmail.com</a>
        </Typography>
      </div>
      <Typography variant="body1" color="textSecondary" className={classes.secondLocTitle}>
        Second Location
      </Typography>
      <div className={classes.addressWrapper}>
        <div className={classes.wrapper}>
          <LocationOnIcon fontSize="large" className={classes.icon} />
          <div className={classes.contactTextInner}>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              401 S Atlantic Ave,
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              Ocean City,
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.description}>
              MD 21842
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <PhoneIcon fontSize="large" className={classes.icon} />
        <Typography variant="body1" color="textSecondary" className={classnames(classes.description, classes.phone)}>
          <a href="tel:410-390-7841">(410) 390-7841</a>
        </Typography>
      </div>
    </div>
  );
};

export default Sidebar;
