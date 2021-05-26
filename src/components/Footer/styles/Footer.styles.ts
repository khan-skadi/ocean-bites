import { makeStyles, Theme } from "@material-ui/core";

export interface Props {
  position: "fixed" | "static";
  spacing?: string | undefined;
}

export const useStyles = makeStyles<Theme, Props>((theme) => ({
  root: {
    background: theme.palette.secondary.light,
    padding: "50px 0 100px",
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    position: ({ position }) => position,
    bottom: 0,
    width: "100%",
    marginTop: ({ spacing }) => spacing || "",
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
