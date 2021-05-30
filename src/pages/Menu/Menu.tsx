import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { Theme, Container, Typography, Link, useMediaQuery } from "@material-ui/core";
import classnames from "classnames";

// Helpers
import { menuListItems } from "__data__/menuMockData";
import { PATHS } from "utils/appConstants";

// Components
import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import MenuPage from "components/Menu/MenuPage";
import Footer from "components/Footer";
import { MenuItem } from "models/menu";

import { useStyles } from "./styles/Menu.styles";

const Menu = () => {
  const classes = useStyles();
  const location = useLocation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
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

  const getSpacing = useCallback(
    (loc: string) => {
      switch (loc) {
        case PATHS.menuItems.appetizers:
          return "";
        case PATHS.menuItems.pizza:
          return "";
        case PATHS.menuItems.salads:
          return isMobile ? "20px" : "90px";
        case PATHS.menuItems.wraps:
          return isMobile ? "40px" : "210px";
        case PATHS.menuItems.hotAndColdSubs:
          return "";
        case PATHS.menuItems.sandwiches:
          return isMobile ? "20px" : "0";
        case PATHS.menuItems.iceCreamAndTreats:
          return isMobile ? "20px" : "20px";
        case PATHS.menuItems.kidsMenu:
          return "";
        default:
          return "";
      }
    },
    [isMobile]
  );

  useEffect(() => {
    const item = getActiveMenuItem(location.pathname);
    setActiveMenuItem(item);
  }, [location.pathname, getActiveMenuItem]);

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
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className={classnames(item.name === activeMenuItem.name && classes.active)}
                    >
                      {item.name}
                    </Typography>
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
