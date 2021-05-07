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
      fontSize: "117px",
      fontFamily: "Grotesk",
      fontWeight: 600,
      lineHeight: 2.3,
      padding: "0 60px",
      animation: "fadeIn 0.8s ease-in-out forwards",
      whiteSpace: "nowrap",
    },
    menuWrapper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "#fff",
      fontSize: "26px",
      fontFamily: "Hatton",
      textTransform: "uppercase",
      marginTop: "100px",

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

const menuItems = ["home", "about", "menu"];

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

export default Navbar;
