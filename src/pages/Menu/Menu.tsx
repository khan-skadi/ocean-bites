import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { makeStyles, createStyles, Theme, Container, Typography, Link } from "@material-ui/core";
import classnames from "classnames";

// Helpers
import { menuListItems } from "__data__/menuMockData";
import { PATHS } from "utils/appConstants";

// Components
import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import MenuPage from "components/Menu/MenuPage";
import Footer from "components/Footer";
import { MenuItem } from "models/menu";

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
    menuItemsListWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      [theme.breakpoints.down("xs")]: {
        display: "table",
        margin: "0 auto",
      },
    },
    menuItemsList: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      marginTop: "100px",

      [theme.breakpoints.down("xs")]: {
        marginLeft: "30px",
        marginTop: 0,
      },

      "& li": {
        margin: "0 10px",
        padding: 0,
        float: "left",

        "& p": {
          fontFamily: "Grotesk",
          fontWeight: 600,
          fontSize: "15px",
          textTransform: "uppercase",
          color: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
    link: {
      "& .MuiTypography-root": {
        color: theme.palette.primary.light,
      },

      [theme.breakpoints.down("xs")]: {
        "& .MuiTypography-root": {
          textTransform: "capitalize",
        },
      },

      "&:hover": {
        textDecoration: "none",
      },
    },
    active: {
      color: `#000 !important`,
      textDecoration: "underline",
    },
    listButton: {
      background: theme.palette.primary.light,
      marginTop: "5px",

      "& .MuiTypography-root": {
        color: "#fff",
      },
    },
  })
);

const Menu = () => {
  const classes = useStyles();
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(menuListItems[0]);

  const getActiveMenuItem = useCallback((loc: string) => {
    switch (loc) {
      case PATHS.menuItems.appetizers:
        return menuListItems[0];
      case PATHS.menuItems.pizza:
        return menuListItems[1];
      case PATHS.menuItems.salads:
        return menuListItems[2];
      case PATHS.menuItems.wraps:
        return menuListItems[3];
      case PATHS.menuItems.hotAndColdSubs:
        return menuListItems[4];
      case PATHS.menuItems.sandwiches:
        return menuListItems[5];
      case PATHS.menuItems.iceCreamAndTreats:
        return menuListItems[6];
      case PATHS.menuItems.kidsMenu:
        return menuListItems[7];
      default:
        return menuListItems[0];
    }
  }, []);

  const getSpacing = useCallback((loc: string) => {
    switch (loc) {
      case PATHS.menuItems.appetizers:
        return "";
      case PATHS.menuItems.pizza:
        return "";
      case PATHS.menuItems.salads:
        return "476px";
      case PATHS.menuItems.wraps:
        return "644px";
      case PATHS.menuItems.hotAndColdSubs:
        return "";
      case PATHS.menuItems.sandwiches:
        return "214px";
      case PATHS.menuItems.iceCreamAndTreats:
        return "174px";
      case PATHS.menuItems.kidsMenu:
        return "";
      default:
        return "";
    }
  }, []);

  useEffect(() => {
    const item = getActiveMenuItem(location.pathname);
    setActiveMenuItem(item);
  }, [location.pathname, getActiveMenuItem]);
  console.log(menuListItems);

  return (
    <div className={classes.root}>
      <SecondaryNavbar />
      <div className={classes.wrapper}>
        <Container maxWidth="md">
          <div className={classes.menuItemsListWrapper}>
            <ul className={classes.menuItemsList}>
              {menuListItems.map((item) => (
                <li key={item.name}>
                  <Link className={classes.link} component={NavLink} to={item.link}>
                    {/* <Button variant="outlined" className={classes.listButton}> */}
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className={classnames(item.name === activeMenuItem.name && classes.active)}
                    >
                      {item.name}
                    </Typography>
                    {/* </Button> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <MenuPage menuItem={activeMenuItem} />
        </Container>
      </div>
      <Footer position="static" spacing={getSpacing(activeMenuItem.link)} />
    </div>
  );
};

export default Menu;
