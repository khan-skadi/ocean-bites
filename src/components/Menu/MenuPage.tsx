import React, { FC } from "react";
import { makeStyles, createStyles, Theme, Grid } from "@material-ui/core";
import { MenuItem } from "models/menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    titleWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: theme.palette.secondary.main,
      fontFamily: "Grotesk",
      textTransform: "uppercase",
    },
    timeSheet: {
      color: theme.palette.secondary.main,
      fontFamily: "Grotesk",
      textTransform: "capitalize",
    },
  })
);

interface Props {
  menuItem: MenuItem;
}

const MenuPage: FC<Props> = ({ menuItem }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <p className={classes.title}>Breakfast</p>
        <p className={classes.timeSheet}>Daily, 8A - 11:15A</p>
      </div>
      <Grid>123</Grid>
    </div>
  );
};

export default MenuPage;
