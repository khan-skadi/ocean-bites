import React from "react";
import { Link as NavLink } from "react-router-dom";
import { Link, makeStyles, Theme } from "@material-ui/core";
import { PATHS } from "utils/appConstants";

// Assets
import Pizza from "assets/images/menu-items/Pizza.jpg";
import Salad from "assets/images/menu-items/Salad.png";
import Wraps from "assets/images/menu-items/Wraps.jpg";
import Burgers from "assets/images/menu-items/Burgers.jpg";
import ChickenWings from "assets/images/menu-items/ChickenWings.jpg";
import ColdAndHotSubs from "assets/images/menu-items/Cold&HotSubs.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  onTheMenu: {
    background: theme.palette.secondary.light,
    padding: "15px 0",

    [theme.breakpoints.up("md")]: {
      paddingTop: 100,
      paddingBottom: 40,
    },
  },
  onTheMenuWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  onTheMenuTitle: {
    fontFamily: "Grotesk",
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: theme.palette.primary.light,
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      fontSize: "26px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "53.3px",
      margin: 0,
    },
  },
  menuCategoriesWrapper: {
    background: "#000",
  },
  menuList: {
    margin: 0,
    padding: 0,
    listStyle: "none",

    "& li": {
      float: "left",
      width: "33.3333%",
      height: "150px",

      [theme.breakpoints.up("sm")]: {
        height: 450,
      },

      "&:nth-child(4)": {
        marginTop: "200px",

        [theme.breakpoints.down("xs")]: {
          marginTop: "50px",
        },
      },

      "&:nth-child(5)": {
        marginTop: "200px",

        [theme.breakpoints.down("xs")]: {
          marginTop: "50px",
        },
      },

      "&:nth-child(6)": {
        marginTop: "200px",

        [theme.breakpoints.down("xs")]: {
          marginTop: "50px",
        },
      },
    },
  },
  menuItem: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  menuItemInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "50px",
    textAlign: "center",
    border: "1px solid #fff",
    borderRadius: "50%",

    "&:hover": {
      background: "rgba(0, 0, 0, 0.7)",
    },

    [theme.breakpoints.up("sm")]: {
      width: 295,
      height: 140,
    },

    "& p": {
      fontFamily: "Hatton",
      fontWeight: 500,
      fontSize: "12px",
      color: "#fff",
      margin: 0,
      padding: 0,
      width: "100%",

      "&:hover": {
        color: theme.palette.primary.main,
      },

      [theme.breakpoints.up("sm")]: {
        width: "90%",
        fontSize: "22px",
      },
    },
  },
}));

const OnTheMenu = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.onTheMenu}>
        <div className={classes.onTheMenuWrapper}>
          <p className={classes.onTheMenuTitle}>On The Menu</p>
        </div>
      </section>
      <div className={classes.menuCategoriesWrapper}>
        <ul className={classes.menuList}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <div
                className={classes.menuItem}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.img})`,
                }}
              >
                <Link className={classes.menuItemLink} component={NavLink} to={item.link}>
                  <div className={classes.menuItemInner}>
                    <p>{item.name}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const menuItems = [
  {
    name: "Salads",
    label: "salads",
    link: PATHS.menuItems.salads,
    img: Salad,
  },
  {
    name: "Chicken Wings",
    label: "chickenWings",
    link: PATHS.menuItems.appetizers,
    img: ChickenWings,
  },
  {
    name: "Wraps",
    label: "wraps",
    link: PATHS.menuItems.wraps,
    img: Wraps,
  },
  {
    name: "Burgers",
    label: "burgers",
    link: PATHS.menuItems.wraps,
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
