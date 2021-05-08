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
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    btn: {
      minWidth: "210px",
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
