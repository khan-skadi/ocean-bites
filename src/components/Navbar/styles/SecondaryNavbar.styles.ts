import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbarRoot: {
      "& .MuiContainer-root": {
        [theme.breakpoints.down("xs")]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },

      [theme.breakpoints.up("sm")]: {
        minHeight: "100px",
      },
    },
    appBar: {
      backgroundColor: theme.palette.secondary.light,
    },
    menuButton: {},
    title: {
      marginTop: "15px",

      [theme.breakpoints.down("xs")]: {
        marginTop: "5px",
      },

      "&:hover": {
        textDecoration: "none",
      },

      "& .MuiTypography-root": {
        fontSize: "19px",
        textTransform: "uppercase",
        fontFamily: "Hatton",
        fontWeight: 300,
        color: theme.palette.primary.light,

        [theme.breakpoints.up("sm")]: {
          fontSize: "36px",
        },
      },
    },
    nav: {
      display: "flex",
      alignItems: "flex-end",

      [theme.breakpoints.down("xs")]: {
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
      },

      "& a:first-child": {
        flexGrow: 1,
      },
    },
    navMenu: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",

      "& .MuiLink-root": {
        "&:hover": {
          textDecoration: "none",
        },

        "& .MuiButtonBase-root": {
          fontFamily: "Hatton",
          fontSize: "22px",
          color: "#000",
          textTransform: "capitalize",

          [theme.breakpoints.down("sm")]: {
            fontSize: "12px !important",
          },

          [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
          },

          "&:not($active)": {
            color: "#000",
          },

          "&:hover": {
            opacity: 0.75,
          },

          "&:not(:first-of-type)": {
            marginLeft: "15px",
          },
        },
      },
    },
    active: {
      color: `${theme.palette.primary.light} !important`,
    },
    mobileMenu: {},
  })
);
