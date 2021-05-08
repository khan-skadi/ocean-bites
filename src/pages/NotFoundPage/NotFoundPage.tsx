import React from "react";
import { makeStyles, createStyles, Theme, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
    },
    wrapper: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",

      "& p": {
        margin: 0,
        marginTop: "15px",
        marginBottom: "15px",
        fontSize: "42px",
        fontWeight: 500,
        fontFamily: "Hatton",
      },
    },
    btn: {
      minWidth: "350px",
      marginTop: "15px",
      fontSize: "24px",
    },
  })
);

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <p>404</p>
        <p>Page Not Found</p>

        <Button color="primary" variant="contained" className={classes.btn}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
