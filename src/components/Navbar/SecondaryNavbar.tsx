import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import {
  makeStyles,
  createStyles,
  Theme,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
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
        minHeight: "100px",
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
        fontSize: "26px",
        textTransform: "uppercase",
        fontFamily: "Hatton",
        fontWeight: 300,
        color: theme.palette.primary.light,

        [theme.breakpoints.up("sm")]: {
          fontSize: "36px",
        },
      },
    },
    nav: {
      display: "flex",
      alignItems: "flex-end",

      "& a:first-child": {
        flexGrow: 1,
      },
    },
    navMenu: {
      display: "flex",
      alignItems: "flex-start",

      "& .MuiLink-root": {
        "&:hover": {
          textDecoration: "none",
        },

        "& .MuiButtonBase-root": {
          fontFamily: "Hatton",
          fontSize: "18px",
          textTransform: "capitalize",

          "&:not($active)": {
            color: "#000",
          },

          "&:hover": {
            color: theme.palette.primary.light,
            opacity: 0.75,
          },

          "&:not(:first-of-type)": {
            marginLeft: "15px",
          },
        },
      },
    },
    active: {
      color: theme.palette.primary.light,
    },
  })
);

const SecondaryNavbar = () => {
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
          <Container maxWidth="md">
            <div className={classes.nav}>
              <Link className={classes.title} component={NavLink} to={PATHS.home}>
                <Typography variant="h6">Ocean Bites</Typography>
              </Link>

              <div className={classes.navMenu}>
                <Link component={NavLink} to={PATHS.home}>
                  <Button variant="text" className={classnames(activeTab === NavItems.home && classes.active)}>
                    Home.
                  </Button>
                </Link>
                <Link component={NavLink} to={PATHS.menu}>
                  <Button variant="text" className={classnames(activeTab === NavItems.menu && classes.active)}>
                    Menu.
                  </Button>
                </Link>
                <Link component={NavLink} to={PATHS.about}>
                  <Button variant="text" className={classnames(activeTab === NavItems.about && classes.active)}>
                    About Us.
                  </Button>
                </Link>
                <Link component={NavLink} to={PATHS.contact}>
                  <Button variant="text" className={classnames(activeTab === NavItems.contact && classes.active)}>
                    Contact.
                  </Button>
                </Link>
              </div>
            </div>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SecondaryNavbar;
