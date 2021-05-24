import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  footerImageWrapper: {
    maxWidth: "100%",
    height: "150px",
    position: "relative",
    background: "#000",

    [theme.breakpoints.up("sm")]: {
      height: "600px",
    },

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center right",
      filter: "brightness(95%)",
    },
  },
  footer: {
    position: "relative",
    background: theme.palette.secondary.light,
    color: "#000",
    padding: "40px 0 80px",

    [theme.breakpoints.up("sm")]: {
      padding: "50px 0 200px",
    },
  },
  footerTitle: {
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "Grotesk",
    textTransform: "uppercase",
    color: theme.palette.primary.light,

    "& p": {
      margin: 0,
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "26px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "30px !important",
    },
  },
  footerSectionWrapper: {
    display: "flex",
    flexFlow: "column wrap",

    [theme.breakpoints.up("sm")]: {
      flexFlow: "row wrap",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },

    [theme.breakpoints.up("md")]: {
      flexFlow: "row nowrap",
      justifyContent: "space-evenly",
      width: "100%",
    },
  },
  footerSection: {
    margin: "20px 0",

    [theme.breakpoints.up("sm")]: {
      margin: 0,
      marginTop: "30px",
      display: "flex",
      flexFlow: "column wrap",
    },

    [theme.breakpoints.up("md")]: {
      display: "block",
    },

    "& p": {
      margin: 0,
      fontFamily: "Grotesk",
      fontSize: "14px",
    },
  },
  footerSectionTitle: {
    fontWeight: 600,

    [theme.breakpoints.up("md")]: {
      fontSize: "26px !important",
    },
  },
  footerSectionText: {
    fontWeight: 400,

    [theme.breakpoints.up("md")]: {
      fontSize: "26px !important",
    },
  },
  contactWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "20px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "18px",
      marginTop: theme.spacing(2),

      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(1),
      },
    },

    "& svg": {
      fontSize: "2.1em",
      marginRight: theme.spacing(2),
      color: theme.palette.primary.light,
      marginTop: theme.spacing(2),

      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(1),
      },
    },
  },
  hoursWrapper: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",

    "& .MuiTypography-root.MuiTypography-body1": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      fontSize: "18px",
      textTransform: "uppercase",
      letterSpacing: 1.5,
      color: theme.palette.primary.light,
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
  },
  hoursItem: {
    marginTop: theme.spacing(1),

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "18px",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  locationWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",

    "& .MuiTypography-root.MuiTypography-body1": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      fontSize: "18px",
      textTransform: "uppercase",
      letterSpacing: 1.5,
      color: theme.palette.primary.light,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },
  locationItem: {
    marginTop: theme.spacing(1),

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "18px",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  socialWrapper: {
    "& .MuiTypography-root.MuiTypography-body1": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      fontSize: "18px",
      textTransform: "uppercase",
      letterSpacing: 1.5,
      color: theme.palette.primary.light,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },
  socialItem: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "112px",
  },
  socialIconWrapper: {
    width: "30px",

    "&:first-child": {
      marginRight: theme.spacing(2),
    },

    "& img": {
      width: "100%",
      height: "100%",
    },

    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
  footerGridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&:first-child": {
      flexFlow: "column nowrap",
    },
  },
}));
