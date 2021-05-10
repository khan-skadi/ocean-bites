import React from "react";
import { makeStyles, createStyles, Theme, AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbarRoot: {
      [theme.breakpoints.up("sm")]: {
        minHeight: "50vh",
        alignItems: "flex-end",
      },

      [theme.breakpoints.up("md")]: {
        minHeight: "40vh",
      },
    },
    appBar: {
      backgroundColor: "#000",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: "26px",
      textTransform: "uppercase",
      fontFamily: "Hatton",
      fontWeight: 300,

      [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "120px",
      },
    },
    navMenu: {},
  })
);

const TestNavbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbarRoot}>
          <Typography variant="h6" color="textPrimary" className={classes.title}>
            Ocean Bites
          </Typography>

          <div className={classes.navMenu}>
            <Button variant="text" color="primary">
              Home
            </Button>
            <Button variant="text" color="primary">
              Menu
            </Button>
            <Button variant="text" color="primary">
              About Us
            </Button>
            <Button variant="text" color="primary">
              Contact
            </Button>
          </div>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TestNavbar;