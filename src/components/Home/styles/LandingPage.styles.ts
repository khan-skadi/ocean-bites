import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      position: "relative",
    },
    heroWrapper: {
      maxWidth: "100%",
      height: "98vh",
      overflow: "hidden",

      [theme.breakpoints.up("sm")]: {
        width: "100%",
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center center",
        filter: "brightness(95%)",

        [theme.breakpoints.down("xs")]: {
          objectPosition: "center right",
        },
      },
    },
    clearFix: {
      background: "rgb(242, 244, 234)",

      "&:after": {
        content: '""',
        clear: "both",
        display: "table",
      },
    },
    embedWrapper: {
      width: "100%",
      maxWidth: "600px",
    },
  })
);
