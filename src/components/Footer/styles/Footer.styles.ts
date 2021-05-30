import { makeStyles, Theme } from "@material-ui/core";

export interface Props {
  position: "fixed" | "static";
  spacing?: string | undefined;
}

export const useStyles = makeStyles<Theme, Props>((theme) => ({
  root: {
    background: theme.palette.secondary.light,
    padding: "50px 0 0",
    position: ({ position }) => position,
    bottom: 0,
    width: "100%",
    marginTop: ({ spacing }) => spacing || "",
  },
  footerTitle: {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily: "Grotesk",
    textTransform: "uppercase",
    color: theme.palette.primary.light,

    "& p": {
      margin: 0,
    },
  },
  contactWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "8px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "18px",
      marginLeft: theme.spacing(1),

      "& a": {
        color: "#000",
        textDecoration: "none",
      },
    },

    "& svg": {
      fontSize: "2.1em",
      color: theme.palette.primary.light,
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
    width: "26px",

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
  watermark: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(242, 244, 234)",

    "& .MuiTypography-root": {
      fontSize: "14px",
      margin: 0,
      marginTop: "10px",
      textAlign: "center",

      "&:last-of-type": {
        marginTop: 0,
      },

      "& a": {
        color: "#7b7b7b",
        textDecoration: "none",
      },
    },

    "& img": {
      maxWidth: "80px",
      width: "100%",
      marginRight: "5px",
    },
  },
  watermarkDesktop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7px",
    background: "rgb(242, 244, 234)",

    "& .MuiTypography-root": {
      fontSize: "16px",
      margin: 0,
      textAlign: "center",
      marginBottom: "2px",

      "&:last-of-type": {
        marginTop: 0,
        marginRight: "10px",
      },

      "& a": {
        color: "#7b7b7b",
        textDecoration: "none",
      },
    },

    "& img": {
      maxWidth: "80px",
      width: "100%",
      marginRight: "5px",
    },
  },
}));
