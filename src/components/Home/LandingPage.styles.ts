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
    // heroCtaWrapper: {
    //   display: "flex",
    //   justifyContent: "flex-end",
    //   alignItems: "flex-end",
    //   width: "100%",
    //   height: "100%",
    //   position: "absolute",
    //   top: 140,
    //   right: 10,
    //
    //   [theme.breakpoints.up("sm")]: {
    //     top: 580,
    //     right: 20,
    //   },
    // },
    // heroCta: {
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   width: "140px",
    //   height: "60px",
    //   textAlign: "center",
    //   border: "1px solid #fff",
    //   borderRadius: "50%",
    //
    //   [theme.breakpoints.up("sm")]: {
    //     width: 295,
    //     height: 140,
    //   },
    //
    //   "& p": {
    //     fontFamily: "Hatton",
    //     fontWeight: 500,
    //     fontSize: "12px",
    //     color: "#000",
    //     margin: 0,
    //     padding: 0,
    //     width: "100%",
    //
    //     [theme.breakpoints.up("sm")]: {
    //       width: "90%",
    //       fontSize: "22px",
    //     },
    //   },
    // },
    clearFix: {
      background: "rgb(242, 244, 234)",

      "&:after": {
        content: '""',
        clear: "both",
        display: "table",
      },
    },
    fillerBlack: {
      width: "100%",
      height: "300px",
      background: theme.palette.secondary.light,
      position: "relative",
      top: "600px",

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);
