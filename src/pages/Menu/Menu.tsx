import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { Theme, Container, Typography, Link, useMediaQuery } from "@material-ui/core";
import { menuListItems } from "__data__/menuMockData";
import classnames from "classnames";
import { db } from "config/firebase";

// Components
import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import MenuPage from "components/Menu/MenuPage";
import Spinner from "components/Spinner";
import Footer from "components/Footer";
import { MenuItem, CollectionName } from "models/menu";

// Helpers
import { getActiveMenuItem, getSpacing } from "./helpers";

import { useStyles } from "./styles/Menu.styles";

const Menu = () => {
  const classes = useStyles();
  const location = useLocation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(menuListItems[0]);
  const ref = db.collection(CollectionName.menuItems);

  const fetchMenuItems = useCallback(() => {
    setLoading(true);

    ref.onSnapshot((querySnapshot) => {
      const items: any = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setMenuItems(items);
    });

    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  useEffect(() => {
    if (menuItems.length) {
      const item = getActiveMenuItem(location.pathname, menuItems);
      setActiveMenuItem(item);
    }
  }, [location.pathname, menuItems]);

  if (!activeMenuItem) return <Spinner />;
  return (
    <div className={classes.root}>
      <SecondaryNavbar />
      <div className={classes.wrapper}>
        <Container maxWidth="md">
          <div className={classes.menuItemsListWrapper}>
            <ul className={classes.menuItemsList}>
              {loading && <Spinner />}
              {!!menuItems.length &&
                menuItems.map((item) => (
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
      <Footer position="static" spacing={getSpacing(activeMenuItem.link, isMobile)} />
    </div>
  );
};

export default Menu;
