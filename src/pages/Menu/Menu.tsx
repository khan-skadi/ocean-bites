import React, { useState, useEffect } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { Theme, Container, Typography, Link, useMediaQuery } from "@material-ui/core";
import classnames from "classnames";
import { db } from "config/firebase";

// Components
import SecondaryNavbar from "components/Navbar/SecondaryNavbar";
import MenuPage from "components/Menu/MenuPage";
import Footer from "components/Footer";
import { MenuItem } from "models/menu";

// Helpers
import { menuListItems } from "__data__/menuMockData";
import { getActiveMenuItem, getSpacing } from "./helpers";

import { useStyles } from "./styles/Menu.styles";

const ref = db.collection("menuItems");

const Menu = () => {
  const classes = useStyles();
  const location = useLocation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(menuListItems[0]);
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const item = getActiveMenuItem(location.pathname);
    setActiveMenuItem(item);
  }, [location.pathname]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    setLoading(true);

    ref.onSnapshot((querySnapshot) => {
      // @ts-ignore eslint-disable-next-line
      const items: any = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setMenuItems(items);
      setLoading(false);
    });
  };

  console.log("menuItems fetched: ", menuItems);

  return (
    <div className={classes.root}>
      <SecondaryNavbar />
      {loading && <div>Loading..</div>}
      <div className={classes.wrapper}>
        <Container maxWidth="md">
          <div className={classes.menuItemsListWrapper}>
            <ul className={classes.menuItemsList}>
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
