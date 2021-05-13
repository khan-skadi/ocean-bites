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
      backgroundColor: theme.palette.secondary.light,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      "&:hover": {
        textDecoration: "none",
      },

      "& .MuiTypography-root": {
        fontSize: "20px",
        textTransform: "uppercase",
        fontFamily: "Hatton",
        fontWeight: 300,
        color: theme.palette.primary.light,

        [theme.breakpoints.up("sm")]: {
          fontSize: "36px",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "80px",
        },
      },
    },
    nav: {
      display: "flex",
      alignItems: "flex-end",
      flexGrow: 1,

      "& a:first-child": {
        flexGrow: 1,
      },
    },
    navMenu: {
      display: "flex",
      alignItems: "flex-start",
      marginTop: "15px",

      "& .MuiLink-root": {
        "&:hover": {
          textDecoration: "none",
        },

        "& .MuiButtonBase-root": {
          fontFamily: "Hatton",
          fontSize: "30px",
          color: "#000",
          textTransform: "capitalize",

          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },

          [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
          },

          "&:not($active)": {
            color: "#000",
          },

          "&:hover": {
            color: theme.palette.primary.light,
            opacity: 0.75,
          },

          "&:not(:first-of-type)": {
            marginLeft: "15px",

            [theme.breakpoints.down("xs")]: {
              marginLeft: "10px",
            },
          },
        },
      },
    },
    link: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    active: {
      color: `${theme.palette.primary.light} !important`,
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
            <Link className={classes.title} component={NavLink} to={PATHS.home}>
              <Typography variant="h6">Ocean Bites</Typography>
            </Link>

            <div className={classes.navMenu}>
              <Link className={classes.link} component={NavLink} to={PATHS.home}>
                <Button variant="text" className={classnames(activeTab === NavItems.home && classes.active)}>
                  Home.
                </Button>
              </Link>
              <Link className={classes.link} component={NavLink} to={PATHS.menu}>
                <Button variant="text" className={classnames(activeTab === NavItems.menu && classes.active)}>
                  Menu.
                </Button>
              </Link>
              <Link className={classes.link} component={NavLink} to={PATHS.about}>
                <Button variant="text" className={classnames(activeTab === NavItems.about && classes.active)}>
                  About Us.
                </Button>
              </Link>
              <Link className={classes.link} component={NavLink} to={PATHS.contact}>
                <Button variant="text" className={classnames(activeTab === NavItems.contact && classes.active)}>
                  Contact.
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
