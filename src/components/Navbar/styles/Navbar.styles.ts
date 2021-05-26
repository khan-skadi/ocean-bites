import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbarRoot: {
      [theme.breakpoints.up("sm")]: {
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "20px 0 0",
      },

      [theme.breakpoints.up("md")]: {
        padding: "30px 0 0 120px",
      },
    },
    appBar: {
      backgroundColor: theme.palette.secondary.light,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(1),
      },

      "&:hover": {
        textDecoration: "none",
      },

      "& .MuiTypography-root": {
        fontSize: "24px",
        textTransform: "uppercase",
        fontFamily: "Hatton",
        fontWeight: 300,
        color: theme.palette.primary.light,

        [theme.breakpoints.up("sm")]: {
          fontSize: "36px",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "64px",
        },
      },
    },
    nav: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,

      [theme.breakpoints.down("xs")]: {
        flexFlow: "row nowrap",
        justifyContent: "center",
      },

      "& a:first-child": {
        flexGrow: 1,
      },
    },
    menuPaper: {
      width: "100% !important",
      maxWidth: "unset",
      minWidth: "unset",
      top: "56px !important",
      left: "0 !important",
      borderRadius: "0",
      boxShadow: "0px 0px 0px 0px, 0px 8px 10px 1px rgb(0 0 0 / 14%)",
      backgroundColor: "rgb(242, 244, 234)",
    },
    navMenu: {
      display: "flex",
      alignItems: "flex-start",

      [theme.breakpoints.up("sm")]: {
        marginTop: "15px",
        paddingRight: "50px",
      },

      "& .MuiLink-root": {
        "&:hover": {
          textDecoration: "none",
        },

        "& .MuiButtonBase-root": {
          fontFamily: "Hatton",
          fontSize: "30px",
          color: "#000",
          textTransform: "capitalize",

          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },

          [theme.breakpoints.down("xs")]: {
            fontSize: "12px !important",
          },

          "&:not($active)": {
            color: "#000",
          },

          "&:hover": {
            color: theme.palette.primary.light,
            opacity: 0.75,
          },

          "&:not(:first-of-type)": {
            marginLeft: "15px",

            [theme.breakpoints.down("xs")]: {
              marginLeft: "10px",
            },
          },
        },
      },
    },
    link: {
      padding: "0 10px",
      whiteSpace: "nowrap",

      "& .MuiButtonBase-root": {
        fontSize: "22px !important",
      },

      "&:hover": {
        textDecoration: "none",
      },
    },
    active: {
      color: `${theme.palette.primary.light} !important`,
    },
  })
);
