import React from "react";
import { Link as NavLink } from "react-router-dom";
import { Link, Theme, useMediaQuery } from "@material-ui/core";
import { PATHS } from "utils/appConstants";
import { Parallax } from "react-parallax";

// Assets
import Pizza from "assets/images/menu-items/Pizza.jpg";
import Salad from "assets/images/menu-items/Salad.png";
import Wraps from "assets/images/menu-items/Wraps.jpg";
import Burgers from "assets/images/menu-items/Burgers.jpg";
import ChickenWings from "assets/images/menu-items/ChickenWings.jpg";
import ColdAndHotSubs from "assets/images/menu-items/Cold&HotSubs.jpg";

import { useStyles } from "./OnTheMenu.styles";

const OnTheMenu = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  return (
    <>
      <section className={classes.onTheMenu}>
        <div className={classes.onTheMenuWrapper}>
          <p className={classes.onTheMenuTitle}>On The Menu</p>
        </div>
      </section>
      <div className={classes.menuCategoriesWrapper}>
        <ul className={classes.menuList}>
          {menuItems1.map((item) => (
            <li key={item.label}>
              <div
                className={classes.menuItem}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.img})`,
                }}
              >
                <Link className={classes.menuItemLink} component={NavLink} to={item.link}>
                  <Parallax
                    strength={200}
                    renderLayer={(percentage) => (
                      <div
                        className={classes.menuItemInner}
                        style={{
                          position: "absolute",
                          border: "1px solid #fff",
                          // eslint-disable-next-line no-nested-ternary
                          width: isMobile ? "100px" : isTablet ? "200px" : isDesktop ? "295px" : "",
                          // eslint-disable-next-line no-nested-ternary
                          height: isMobile ? "50px" : isTablet ? "78px" : isDesktop ? "140px" : "",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          borderRadius: "50%",
                          background: `rgba(0, 0, 0, ${percentage})`,
                        }}
                      />
                    )}
                  >
                    <div className={classes.menuItemInner}>
                      <p>{item.name}</p>
                    </div>
                  </Parallax>
                </Link>
              </div>
            </li>
          ))}
          {menuItems2.map((item) => (
            <li key={item.label}>
              <div
                className={classes.menuItem}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.img})`,
                }}
              >
                <Link className={classes.menuItemLink} component={NavLink} to={item.link}>
                  <Parallax
                    strength={200}
                    renderLayer={(percentage) => (
                      <div
                        className={classes.menuItemInner}
                        style={{
                          position: "absolute",
                          border: "1px solid #fff",
                          // eslint-disable-next-line no-nested-ternary
                          width: isMobile ? "100px" : isTablet ? "200px" : isDesktop ? "295px" : "",
                          // eslint-disable-next-line no-nested-ternary
                          height: isMobile ? "50px" : isTablet ? "78px" : isDesktop ? "140px" : "",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          borderRadius: "50%",
                          background: `rgba(0, 0, 0, ${percentage})`,
                        }}
                      />
                    )}
                  >
                    <div className={classes.menuItemInner}>
                      <p>{item.name}</p>
                    </div>
                  </Parallax>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const menuItems1 = [
  {
    name: "Salads",
    label: "salads",
    link: PATHS.menuItems.salads,
    img: Salad,
  },
  {
    name: "Appetizers",
    label: "appetizers",
    link: PATHS.menuItems.appetizers,
    img: ChickenWings,
  },
  {
    name: "Wraps",
    label: "wraps",
    link: PATHS.menuItems.wraps,
    img: Wraps,
  },
];

const menuItems2 = [
  {
    name: "Sandwiches",
    label: "sandwiches",
    link: PATHS.menuItems.sandwiches,
    img: Burgers,
  },
  {
    name: "Pizza",
    label: "pizza",
    link: PATHS.menuItems.pizza,
    img: Pizza,
  },
  {
    name: "Cold & Hot Subs",
    label: "coldAndHotSubs",
    link: PATHS.menuItems.hotAndColdSubs,
    img: ColdAndHotSubs,
  },
];

export default OnTheMenu;
