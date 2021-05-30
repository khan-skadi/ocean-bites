import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
    },
    wrapper: {
      marginTop: "30px",

      [theme.breakpoints.down("xs")]: {
        marginTop: "87px",
      },
    },
    menuItemsListWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      [theme.breakpoints.down("xs")]: {
        display: "table",
        margin: "0 auto",
      },
    },
    menuItemsList: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      marginTop: "100px",

      [theme.breakpoints.down("xs")]: {
        marginLeft: "30px",
        marginTop: 0,
      },

      "& li": {
        margin: "0 10px",
        padding: 0,
        float: "left",

        "& p": {
          fontFamily: "Grotesk",
          fontWeight: 600,
          fontSize: "15px",
          textTransform: "uppercase",
          color: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
    link: {
      "& .MuiTypography-root": {
        color: "#000",
      },

      [theme.breakpoints.down("xs")]: {
        "& .MuiTypography-root": {
          textTransform: "capitalize",
        },
      },

      "&:hover": {
        textDecoration: "none",
      },
    },
    active: {
      color: `${theme.palette.primary.light} !important`,
      textDecoration: "underline",
    },
    listButton: {
      background: theme.palette.primary.light,
      marginTop: "5px",

      "& .MuiTypography-root": {
        color: "#fff",
      },
    },
  })
);
