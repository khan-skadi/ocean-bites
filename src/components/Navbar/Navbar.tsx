import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    navWrapper: {
      width: "100%",
      height: "40vh",
      backgroundColor: "rgb(30, 31, 32)",
    },
    navInner: {
      display: "flex",
    },
    navTitle: {
      color: "#fff",
      fontFamily: "Grotesk",
      fontWeight: 600,
      lineHeight: 2.3,
      whiteSpace: "nowrap",
      animation: "fadeIn 0.8s ease-in-out forwards",

      [theme.breakpoints.up("lg")]: {
        fontSize: "117px",
        padding: "0 60px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "80px",
        padding: "0 40px",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "26px",
        padding: "0 20px",
      },
    },
    menuWrapper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "#fff",
      fontSize: "22px",
      fontFamily: "Hatton",
      textTransform: "uppercase",
      marginTop: "190px",

      "& ul": {
        listStyle: "none",
        margin: 0,
        padding: 0,

        "& li": {
          float: "left",
          margin: "0 15px",

          "&:first-of-type": {
            paddingLeft: "15px",
          },

          "&:last-child": {
            paddingRight: "60px",
          },

          "&:hover": {
            cursor: "pointer",
            color: "rgba(255, 243, 148, .9)",
          },
        },
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <div className={classes.navWrapper}>
        <div className={classes.navInner}>
          <p className={classes.navTitle}>Ocean Bites</p>
          <div className={classes.menuWrapper}>
            <ul>
              {menuItems.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const menuItems = ["home", "about", "view menu", "contact us"];

export default Navbar;
