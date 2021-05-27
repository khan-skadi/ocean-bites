import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  reviews: {
    position: "relative",
    background: theme.palette.secondary.light,
    padding: "15px 0",
  },
  reviewsWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",

    "& p": {
      margin: 0,
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: theme.palette.primary.light,
      fontWeight: 600,
      fontFamily: "Grotesk",

      [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
        letterSpacing: 6.3,
        fontWeight: 600,
        paddingBottom: "50px",
      },
    },
  },
  reviewsInnerWrapper: {
    position: "relative",
    background: theme.palette.secondary.light,
    display: "flex",
    flexFlow: "column wrap",
    textAlign: "center",
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "50px",

    [theme.breakpoints.up("sm")]: {
      flexFlow: "row nowrap",
      textAlign: "start",
    },
  },
  reviewCard: {
    display: "flex",
    flexFlow: "column wrap",
    flexBasis: "33.3333%",
    margin: "0 5px",

    [theme.breakpoints.up("md")]: {
      paddingLeft: "50px",
      paddingRight: "50px",
      marginBottom: "300px",
    },
  },
  reviewTitle: {
    textTransform: "uppercase",
    fontSize: "11px",
    color: "#000",
    marginTop: "20px",
    marginBottom: 0,
    letterSpacing: "0.14em",

    [theme.breakpoints.up("md")]: {
      fontSize: "26px",
      fontWeight: 500,
      margin: "12px 0",
    },
  },
  reviewText: {
    fontSize: "11px",
    fontWeight: 300,
    color: "#000",

    [theme.breakpoints.up("md")]: {
      fontSize: "26px",
      fontWeight: 300,
      margin: 0,
    },
  },
  horizontalWrapper: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    margin: "0 auto",

    msOverflowStyle: "none",
    scrollbarWidth: "none",
    borderRadius: "10px",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  horizontalInner: {
    flex: "0 0 auto",
    width: "210px",
    margin: "0 15px",

    "&:last-of-type": {
      width: "225px",

      "& p": {
        width: "210px",
      },
    },
  },
}));
