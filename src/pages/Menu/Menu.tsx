import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { makeStyles, createStyles, Theme, Container, Typography, Link } from "@material-ui/core";
import classnames from "classnames";

// Helpers
import { menuListItems } from "__data__/menuMockData";
import { MenuNavItems } from "utils/navigation";
import { PATHS } from "utils/appConstants";

// Components
import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import MenuPage from "components/Menu/MenuPage";
import { MenuItem } from "models/menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    wrapper: {
      marginTop: "50px",
    },
    menuItemsListWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    menuItemsList: {
      margin: 0,
      padding: 0,
      listStyle: "none",

      "& li": {
        margin: "0 10px",
        padding: 0,
        float: "left",

        "& p": {
          fontWeight: 600,
          fontFamily: "Grotesk",
          textTransform: "uppercase",
          color: "#000",
        },
      },
    },
    link: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    active: {
      color: `${theme.palette.secondary.main} !important`,
    },
  })
);

const Menu = () => {
  const classes = useStyles();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<MenuNavItems | string>(MenuNavItems.breakfast);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(menuListItems[0]);

  const getActiveTab = useCallback((loc: string) => {
    switch (loc) {
      case PATHS.menuItems.breakfast:
        return MenuNavItems.breakfast;
      case PATHS.menuItems.allDay:
        return MenuNavItems.allDay;
      case PATHS.menuItems.dessert:
        return MenuNavItems.dessert;
      case PATHS.menuItems.beverages:
        return MenuNavItems.beverages;
      case PATHS.menuItems.wines:
        return MenuNavItems.wines;
      case PATHS.menuItems.happyHour:
        return MenuNavItems.happyHour;
      default:
        return "";
    }
  }, []);

  const getActiveMenuItem = useCallback((loc: string) => {
    switch (loc) {
      case PATHS.menuItems.breakfast:
        return menuListItems[0];
      case PATHS.menuItems.allDay:
        return menuListItems[1];
      case PATHS.menuItems.dessert:
        return menuListItems[2];
      case PATHS.menuItems.beverages:
        return menuListItems[3];
      case PATHS.menuItems.wines:
        return menuListItems[4];
      case PATHS.menuItems.happyHour:
        return menuListItems[5];
      default:
        return menuListItems[0];
    }
  }, []);

  useEffect(() => {
    const tab = getActiveTab(location.pathname);
    const item = getActiveMenuItem(location.pathname);
    setActiveTab(tab);
    setActiveMenuItem(item);
  }, [location.pathname, getActiveTab, getActiveMenuItem]);

  console.log(`menuListItems: `, menuListItems);

  return (
    <div className={classes.root}>
      <SecondaryNavbar />
      <div className={classes.wrapper}>
        <Container maxWidth="md">
          <div className={classes.menuItemsListWrapper}>
            <ul className={classes.menuItemsList}>
              {menuListItems.map((item) => {
                console.log("item: ", item);
                console.log(`item.link === activeTab`, item.link === activeTab);

                return (
                  <li key={item.name}>
                    <Link className={classes.link} component={NavLink} to={item.link}>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classnames(item.name === activeMenuItem.name && classes.active)}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <MenuPage menuItem={activeMenuItem} />
        </Container>
      </div>
    </div>
  );
};

export default Menu;
