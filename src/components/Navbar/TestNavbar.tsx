import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { makeStyles, createStyles, Theme, AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { NavItems } from "utils/navigation";
import { PATHS } from "utils/appConstants";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbarRoot: {
      [theme.breakpoints.up("sm")]: {
        minHeight: "50vh",
        alignItems: "flex-end",
      },

      [theme.breakpoints.up("md")]: {
        minHeight: "40vh",
      },
    },
    appBar: {
      backgroundColor: "#000",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: "26px",
      textTransform: "uppercase",
      fontFamily: "Hatton",
      fontWeight: 300,

      [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "120px",
      },
    },
    nav: {
      display: "flex",
      flexGrow: 1,
    },
    navMenu: {
      display: "flex",
      alignItems: "flex-start",
      marginTop: "15px",

      "& .MuiButtonBase-root": {
        fontSize: "26px",

        "&:hover": {
          color: theme.palette.primary.main,
          opacity: 0.75,
        },

        "&:not(:first-of-type)": {
          marginLeft: "15px",
        },
      },
    },
    link: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    active: {
      color: theme.palette.primary.main,
    },
  })
);

const TestNavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<NavItems | string>(NavItems.home);

  const getActiveTab = useCallback((loc: string) => {
    switch (loc) {
      case "/home":
        return NavItems.home;
      case "/about-us":
        return NavItems.about;
      case "/contact-us":
        return NavItems.contact;
      case "/menu":
        return NavItems.menu;
      default:
        return "";
    }
  }, []);

  useEffect(() => {
    const tab = getActiveTab(location.pathname);
    setActiveTab(tab);
  }, [location.pathname, getActiveTab]);

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbarRoot}>
          <div className={classes.nav}>
            <Typography variant="h6" color="textPrimary" className={classes.title}>
              Ocean Bites
            </Typography>

            <div className={classes.navMenu}>
              <Link className={classes.link} component={NavLink} to={PATHS.home}>
                <Button variant="text" className={classnames(activeTab === NavItems.home && classes.active)}>
                  Home
                </Button>
              </Link>
              <Link className={classes.link} component={NavLink} to={PATHS.menu}>
                <Button variant="text" className={classnames(activeTab === NavItems.menu && classes.active)}>
                  Menu
                </Button>
              </Link>
              <Link className={classes.link} component={NavLink} to={PATHS.about}>
                <Button variant="text" className={classnames(activeTab === NavItems.about && classes.active)}>
                  About Us
                </Button>
              </Link>
              <Link className={classes.link} component={NavLink} to={PATHS.contact}>
                <Button variant="text" className={classnames(activeTab === NavItems.contact && classes.active)}>
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TestNavbar;
