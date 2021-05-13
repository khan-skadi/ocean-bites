import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    title: {
      fontFamily: "Grotesk",
      fontSize: "24px",
      fontWeight: 600,
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
    },
    addressWrapper: {
      margin: "20px 0",
    },
    description: {
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "17px",
      color: theme.palette.secondary.main,
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" color="textSecondary" className={classes.title}>
        Contact Us
      </Typography>
      <div className={classes.addressWrapper}>
        <Typography variant="body1" color="textSecondary" className={classes.description}>
          Lido Bayside Grill
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.description}>
          40 Island Avenue
        </Typography>
        <Typography variant="body1" color="textSecondary" className={classes.description}>
          Miami Beach, FL 33139
        </Typography>
      </div>
      <Typography variant="body1" color="textSecondary" className={classes.description}>
        786-245-0880
      </Typography>
    </div>
  );
};

export default Sidebar;