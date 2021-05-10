import React from "react";
import { makeStyles, createStyles, Theme, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbarRoot: {
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
    },
  })
);

const TestNavbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbarRoot}>
          <Typography variant="h6" className={classes.title}>
            Ocean Bites
          </Typography>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TestNavbar;
